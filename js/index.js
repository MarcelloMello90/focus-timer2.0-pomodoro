import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonSoundFlorest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFirePlace,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  // buttonSet,
  buttonStop,
  buttonUp,
  buttonDown,

})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  // resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
