export default function() {
  
  const buttonPressAudio = new Audio("./sounds/audio_buttonPress.mp3")
  const kitchenTimer = new Audio("./sounds/audio_kichenTimer.mp3")
  const bgFirePlace = new Audio("./sounds/firePlace.mp3")
  const bgforest = new Audio("./sounds/forest.mp3")
  const bgCoffee = new Audio("./sounds/coffee.mp3")
  const bgRain = new Audio("./sounds/rain.mp3")


  
  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function cardFirePlace () {
    bgFirePlace.play()
    bgforest.pause()
    bgCoffee.pause()
    bgRain.pause()


    bgFirePlace.loop = true
    
  }
  
  function cardForest () {
    bgFirePlace.pause()
    bgforest.play()
    bgCoffee.pause()
    bgRain.pause()

    bgforest.loop = true
  }

  function cardCoffee () {
    bgFirePlace.pause()
    bgforest.pause()
    bgCoffee.play()
    bgRain.pause()

    bgCoffee.loop = true
  }

  function cardRain () {
    bgFirePlace.pause()
    bgforest.pause()
    bgCoffee.pause()
    bgRain.play()

    bgRain.loop = true
  }

  return {
    pressButton,
    timeEnd,
    cardFirePlace,
    cardForest,
    cardCoffee,
    cardRain
  }

}

