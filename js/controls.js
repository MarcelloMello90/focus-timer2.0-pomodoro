export default function Controls({
  btnPause,
  btnPlay,
  // btnForest
}) {

  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  
  function reset() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  function actBtn(btnSelected, btn1, btn2, btn3) {
    btnSelected.classList.add("btnActive")
    btn1.classList.remove("btnActive")
    btn2.classList.remove("btnActive")
    btn3.classList.remove("btnActive")
  }

  return {
    reset,
    play,
    pause,
    actBtn
  }
}