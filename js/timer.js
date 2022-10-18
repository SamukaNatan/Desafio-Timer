export default function Timer({
    minutesDisplay,
    secondsDisplay
}) {

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateDisplay (newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown(){
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateDisplay(minutes,0)

        if( isFinished ) {
            updateDisplay()
            return 
        }

        if( seconds <= 0 ) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds -1))

        countdown()
    }, 1000)
}

function updateMinutes(newMinutes){
    minutes = newMinutes
}

function addMinutes(newMinutes) {
    newMinutes = minutes + 5
    minutes = newMinutes
    updateDisplay(minutes, 0)
}

function removeMinutes(newMinutes) {
    if(minutes > 5) {
    newMinutes = minutes - 5
    minutes = newMinutes
    updateDisplay(minutes, 0)
    } else {
        alert('O timer chegou ao seu limite! :/')
    }
}

    return {
        updateDisplay,
        countdown,
        reset,
        updateMinutes,
        addMinutes,
        removeMinutes
    }

}