import {
    minutesDisplay,
    secondsDisplay,
} from "./elements.js"

import Timer from "./timer.js"
import Events from "./events.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

Events({timer})