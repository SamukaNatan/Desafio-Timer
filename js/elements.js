const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrase = document.querySelector('.incrase')
const buttonLower = document.querySelector('.lower')

let buttonFlorest = document.querySelector('.florest')
let buttonRain = document.querySelector('.rain')
let buttonCoffe = document.querySelector('.coffe')
let buttonFire = document.querySelector('.fire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let iconFl = document.querySelector('.florest svg path')
let iconRa = document.querySelector('.rain svg path')
let iconCf = document.querySelector('.coffe svg path')
let iconFr = document.querySelector('.fire svg path')

export {
    buttonPlay,
    buttonStop,
    buttonIncrase,
    buttonLower,
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFire,
    minutesDisplay,
    secondsDisplay,
    iconFl,
    iconRa,
    iconCf,
    iconFr
}