'use strict'

let gMeme = _createMeme()

function getMeme() {
    return gMeme
}

function setMemeImg(imgId) {
    gMeme.imgId = imgId
}

function _createMeme() {
    return {
        imgId: null,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'One does not simply',
                x: 100,
                y: 80,
                size: 40,
                font: 'Impact',
                color: 'white',
                align: 'center'
            }
        ]
    }
}
