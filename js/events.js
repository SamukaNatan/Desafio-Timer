import {
    buttonPlay,
    buttonStop,
    buttonIncrase,
    buttonLower,
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFire
} from "./elements.js"

import {
    flAudio,
    raAudio,
    cfAudio,
    frAudio,
} from "./sound.js"

import Color from "./color.js"

export default function({timer}) {

const color = Color()
let playlock = 1

buttonPlay.addEventListener('click', function() {
    if (playlock == 1) {
        timer.countdown()
        playlock++
    }
})

buttonStop.addEventListener('click', function() {
    playlock = 1
    timer.reset()
    flAudio.pause()
    raAudio.pause()
    cfAudio.pause()
    frAudio.pause()
    color.stopChangeFo()
    color.stopChangeRa()
    color.stopChangeCf()
    color.stopChangeFr()
})

buttonIncrase.addEventListener('click', function() {
    timer.addMinutes()
})

buttonLower.addEventListener('click', function() {
    timer.removeMinutes()
})

buttonFlorest.addEventListener('click', function() {
    flAudio.play()
    raAudio.pause()
    cfAudio.pause()
    frAudio.pause()

    color.changeForest()

    color.stopChangeRa()
    color.stopChangeCf()
    color.stopChangeFr()
})

buttonRain.addEventListener('click', function() {
    raAudio.play()
    flAudio.pause()
    cfAudio.pause()
    frAudio.pause()

    color.changeRain()

    color.stopChangeFo()
    color.stopChangeCf()
    color.stopChangeFr()
})

buttonCoffe.addEventListener('click', function() {
    cfAudio.play()
    flAudio.pause()
    raAudio.pause()
    frAudio.pause()

    color.changeCoffe()

    color.stopChangeFo()
    color.stopChangeRa()
    color.stopChangeFr()
})

buttonFire.addEventListener('click', function() {
    frAudio.play()
    flAudio.pause()
    raAudio.pause()
    cfAudio.pause()

    color.changeFire()

    color.stopChangeFo()
    color.stopChangeRa()
    color.stopChangeCf()
})
}