'use strict'

async function onInit() {
    await _initCards()
    window.addEventListener('resize', onMemeEditorResize)
    renderPage('gallery')
}

function renderPage(pageName, pageData = '') {
    const elMain = document.querySelector('main')
    toggleClass(elMain, pageName)

    if (pageName === 'gallery') {
        elMain.innerHTML = `
        <input 
            oninput="onFilterCards(this)" 
            class="search-input" 
            type="text" 
            placeholder="Search" />
        <section class="cards grid"></section>
        `

        renderCards()
    }

    if (pageName === 'meme-edit') {
        elMain.innerHTML = renderMeme(pageData)
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
