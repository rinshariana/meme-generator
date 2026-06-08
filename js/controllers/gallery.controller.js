'use strict'

let gFilter = null

function onInit() {
    renderCards()
}

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
                <div class="card">
                    <img src="${card.url}" alt="card">
                </div>
                `
        }).join('')
    }

    elCards.innerHTML = strHtml
}

function onFilterCards(elInput) {
	gFilter = elInput.value
	renderCards()
}