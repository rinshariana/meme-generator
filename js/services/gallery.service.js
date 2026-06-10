'use strict'

const STORAGE_KEY = 'cards_array'

let gCards
// _initCards()

function getCards(filter = null) {
    if (!filter) return gCards
    console.log(filter)

    const searchTxt = filter.toLowerCase()
    return gCards.filter(card => card.tags.toLowerCase().includes(searchTxt))
}

// function getCardUrl(id) {
//     return gCards.filter(card => card.id === id)
// }

// Private

function _createCard(id, url) {
    return { id, url, tags: '' }
}

async function _initCards() {
    const savedCards = loadFromStorage(STORAGE_KEY)
    if (savedCards && savedCards.length > 0) {
        gCards = savedCards
        return
    }

    const response = await fetch('services/metadata/cards.json')
    if (!response.ok) {
        gCards = []
        return
    }

    gCards = await response.json()
    _saveCards()
}

function _saveCards() {
    saveToStorage(STORAGE_KEY, gCards)
}