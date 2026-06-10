'use strict'

let gSelectedMemeUrl = ''
let gMemeDrawToken = 0

function resizeCanvas(canvas) {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

async function renderSelectedMeme() {
    const canvas = document.querySelector('.canvas')
    if (!canvas || !gSelectedMemeUrl) return

    const ctx = canvas.getContext('2d')
    resizeCanvas(canvas)

    const drawToken = ++gMemeDrawToken

    try {
        const img = await loadImage(gSelectedMemeUrl)
        if (drawToken !== gMemeDrawToken) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    } catch (err) {
        if (drawToken !== gMemeDrawToken) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

function loadImage(imgUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = imgUrl
    })
}

function renderMeme(selectedMemeUrl = '') {
    if (selectedMemeUrl) gSelectedMemeUrl = selectedMemeUrl

    return `<div class="main-content grid">
                <button class="btn back-btn" onclick="renderPage('gallery')">Back to Gallery</button>

                <div class="canvas-container">
                    <canvas class="canvas"></canvas>
                </div>

                <section class="toolbar">
                    <ul class="clean-list grid">
                        <li><h2>Edit Text Lines</h2></li>
                        <!-- <li><button class="btn">Gallery</button></li>
                        <li><button class="btn">About</button></li> -->
                    </ul>
                </section>
            </div>`
}

function onMemeEditorResize() {
    if (!document.querySelector('.meme-edit .canvas')) return
    renderSelectedMeme()
}
