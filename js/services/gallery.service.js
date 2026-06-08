'use strict'

const STORAGE_KEY = 'cards_array'

let gCards
_createCards()

function getCards(filter = null) {
    if (!filter) return gCards

    const searchTxt = filter.toLowerCase()

    return gCards.filter(card => 
        card.tags.toLowerCase().includes(searchTxt))
}

// Private

function _createCard(id, url) {
    return {id, url, tags:''}
}

function _createCards() {
    gCards = loadFromStorage(STORAGE_KEY)
    if (gCards && gCards.length > 0) return

    gCards = new Array(18).fill(0).map((element, idx) => {
        return _createCard(idx + 1, `/images/square/${idx + 1}.jpg`)
    })
    _saveCards()
}

function _saveCards() {
    saveToStorage(STORAGE_KEY, gCards)
}