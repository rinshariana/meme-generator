'use strict'

let gFilter = null

function renderCards() {
    const elCards = document.querySelector('.cards')

    let strHtml = ''

    const cards = getCards(gFilter)
    if (!cards.length) {
        strHtml += `<div class="message">
                        <span>No matching cards were found...</span>
                    </div>`
    } else {
        strHtml += cards.map(card => {
        return `
                <div class="card" onclick="onCardClick(${card.id})">
                    <img src="${card.url}" alt="card">
                </div>
                `
        }).join('')
    }

    elCards.innerHTML = strHtml
}

function renderGallery() {
    return `<div class="main-layout grid">
        <input 
            oninput="onFilterCards(this)" 
            class="search-input" 
            type="text" 
            placeholder="Search" />
        <section class="cards grid"></section>
    </div>`
}

function onFilterCards(elInput) {
	gFilter = elInput.value
	renderCards()
}

function onCardClick(cardId) {
    setMemeImg(cardId)
    renderPage('meme-edit')
}
