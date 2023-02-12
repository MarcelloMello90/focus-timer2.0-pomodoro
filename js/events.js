import {
  btnCoffee,
  btnFirePlace,
  btnForest,
  btnPause,
  btnPlay,
  btnRain,
  btnStop
} from "./elements.js"

import Sounds from "./sounds.js"
const sounds = Sounds()

export default function({controls, timer, sound}) {

  btnPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  btnPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  btnStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  btnForest.addEventListener('click', function() {
    sounds.cardForest()
  })

  btnFirePlace.addEventListener('click', function() {
    sounds.cardFirePlace()
  })

  btnCoffee.addEventListener('click', function() {
    sounds.cardCoffee()
  })

  btnRain.addEventListener('click', function() {
    sounds.cardRain()
  })
  

}