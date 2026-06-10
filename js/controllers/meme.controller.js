'use strict'

// const canvas = document.querySelector('.canvas')
// const ctx = canvas.getContext('2d')

// window.addEventListener('resize', resizeCanvas)

// resizeCanvas()
// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50);

// const img = new Image(); // Create new img element
// img.src = "images/square/6.jpg"

// img.onload = () => {
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
// }

function resizeCanvas() {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

function renderMeme() {
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