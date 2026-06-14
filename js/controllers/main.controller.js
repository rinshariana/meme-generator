'use strict'

async function onInit() {
    await _initCards()
    window.addEventListener('resize', onMemeEditorResize)
    renderPage('gallery')
}

function renderPage(pageName) {
    const elMain = document.querySelector('main')
    toggleClass(elMain, pageName)

    if (pageName === 'gallery') {
        elMain.innerHTML = renderGallery()

        renderCards()
    }

    if (pageName === 'meme-edit') {
        elMain.innerHTML = renderMeme()
        renderSelectedMeme()
    }

    if (pageName === 'about') {
        elMain.innerHTML = renderAbout()
    }
}

function toggleClass(el, className) {
    let classes = ['about', 'meme-edit', 'gallery']
    el.classList.remove(...classes)
    el.classList.add(className)
}
