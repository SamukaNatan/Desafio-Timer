import {
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFire,
    iconFl,
    iconRa,
    iconCf,
    iconFr
} from "./elements.js"

export default function() {

function changeForest() {
    buttonFlorest.style.background = "#02799d";
    iconFl.style.fill = "white";
}

function changeRain() {
    buttonRain.style.background = "#02799d";
    iconRa.style.fill = "white";
}

function changeCoffe() {
    buttonCoffe.style.background = "#02799d";
    iconCf.style.fill = "white";
}

function changeFire() {
    buttonFire.style.background = "#02799d";
    iconFr.style.fill = "white";
}

function stopChangeFo() {
    buttonFlorest.style.background = "#e0e0e5";
    iconFl.style.fill = "black";
}
function stopChangeRa() {
    buttonRain.style.background = "#e0e0e5";
    iconRa.style.fill = "black";
}

function stopChangeCf() {
    buttonCoffe.style.background = "#e0e0e5";
    iconCf.style.fill = "black";
}

function stopChangeFr() {
    buttonFire.style.background = "#e0e0e5";
    iconFr.style.fill ="black";
}

return {
    changeForest,
    changeRain,
    changeCoffe,
    changeFire,
    stopChangeFo,
    stopChangeRa,
    stopChangeCf,
    stopChangeFr
}
}