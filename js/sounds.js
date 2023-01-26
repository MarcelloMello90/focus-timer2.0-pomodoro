export default function() {
    // const buttonPressAudio = new Audio("./sounds/audios_buttonPress")
  const kitchenTimer = new Audio("./sounds/audios_kichenTimer")
  const audioForest = new Audio("./sounds/forest")
  const audioRain = new Audio("./sounds/rain")
  const audioCoffee = new Audio("./sounds/coffee")
  const audioFirePlace = new Audio("./sounds/firePlace")


  // bgAudio.loop = true
  audioForest = true
  audioRain = true
  audioCoffee = true
  audioFirePlace = true

  function pressButtonForest() {
    audioForest.play()
  }

  function pressButtonRain() {
    audioRain.play()
  }

  function pressButtonCoffee() {
    audioCoffee.play()
  }

  function pressButtonFirePlace() {
    audioFirePlace.play()
  }

  // function pressButton() {
  //   buttonPressAudio.play()
  // }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButtonForest,
    pressButtonRain,
    pressButtonCoffee,
    pressButtonFirePlace,
    timeEnd,
    // bgAudio
  }

}