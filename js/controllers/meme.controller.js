'use strict'

let gMemeDrawToken = 0

function resizeCanvas(canvas) {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

async function renderSelectedMeme() {
    const canvas = document.querySelector('.canvas')
    const meme = getMeme()
    const selectedCard = getCardById(meme.imgId)
    if (!canvas || !selectedCard) return

    const ctx = canvas.getContext('2d')
    resizeCanvas(canvas)

    const drawToken = ++gMemeDrawToken

    try {
        const img = await loadImage(selectedCard.url)
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

function renderMeme() {
    return `<div class="edit-layout grid">
                <section>
                    <button class="btn back-btn" onclick="renderPage('gallery')">Back to Gallery</button>
                    <canvas class="canvas"></canvas>
                </section>

                <section class="toolbar grid">
                    <div class="grid flow-column space-between">
                        <h2>Edit Text Lines</h2>
                        <ul class="clean-list grid flow-column">
                            <li><button class="btn">1/2</button></li>
                            <li><button class="btn" onclick="onSwitchLine()">&#10607</button></li>
                            <li><button class="btn" onclick="onAddLine()"><i class="fa-regular fa-square-plus"></i></button></li>
                            <li><button class="btn" onclick="onDeleteLine()"><i class="fa-regular fa-trash-can"></i></button></li>
                        </ul>
                    </div>

                    <div class="font-editor">
                        <select class="font-select" onchange="onFontChange(this)">
                            <option selected>Impact</option>
                            <option>Anton</option>
                            <option>Arial</option>
                        </select>

                        <button class="btn">A-</button>
                        <button class="btn">A+</button>

                        <span class="toolbar-divider">|</span>

                        <button class="btn"><i class="fa-solid fa-align-left"></i></button>
                        <button class="btn"><i class="fa-solid fa-align-center"></i></button>
                        <button class="btn"><i class="fa-solid fa-align-right"></i></button>

                        <span class="toolbar-divider">|</span>

                        <button class="btn">A</button>
                        <button class="btn">✎</button>

                        <hr class="custom-line">

                        <textarea class="text-line-input" autofocus onfocus="this.setSelectionRange(this.value.length, this.value.length)">One does not simply</textarea>
                    </div>
                </section>
            </div>`
}

function onMemeEditorResize() {
    if (!document.querySelector('.meme-edit .canvas')) return
    renderSelectedMeme()
}


function onFontChange(elFontSelect) {
    const fontFamily = elFontSelect.value
    console.log(fontFamily)

    document.querySelector('.meme-text').style.fontFamily = elFontSelect.value
}
