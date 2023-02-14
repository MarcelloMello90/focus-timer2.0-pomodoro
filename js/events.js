import {
  btnCoffee,
  btnFirePlace,
  btnForest,
  btnPause,
  btnPlay,
  btnRain,
  btnStop,
  btnUpTimer,
  btnDownTimer
} from "./elements.js"

import Sounds from "./sounds.js"
// import Timer from "./timer.js"
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
    controls.actBtn(btnForest, btnCoffee, btnFirePlace, btnRain)

  })

  btnFirePlace.addEventListener('click', function() {
    sounds.cardFirePlace()
    controls.actBtn(btnFirePlace, btnForest, btnCoffee, btnRain)

  })

  btnCoffee.addEventListener('click', function() {
    sounds.cardCoffee()
    controls.actBtn(btnCoffee, btnForest, btnFirePlace, btnRain)

  })

  btnRain.addEventListener('click', function() {
    sounds.cardRain()
    controls.actBtn(btnRain, btnForest, btnCoffee, btnFirePlace)

  })
  
  btnUpTimer.addEventListener('click', function() {
    timer.UpMinutes()
  })

  btnDownTimer.addEventListener('click', function() {
    timer.DownMinutes()
  })
}