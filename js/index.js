import Timer from "./timer.js"
import Buttons from "./btn-functions.js"

import {
  buttonLightMode,
  buttonDarkMode,
  iconCafeteria,
  iconForest,
  iconFireplace,
  iconRain,
  cardCafeteria,
  cardFireplace,
  cardForest,
  cardRain,
  songCafeteria,
  songFireplace,
  songForest,
  songRain,
  volumeControlForest,
  volumeControlRain,
  volumeControlCafeteria,
  volumeControlFireplace,
  wrapperInputRangeForest,
  wrapperInputRangeRain,
  wrapperInputRangeCafeteria,
  wrapperInputRangeFireplace,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutes,
  seconds,
} from "./elements.js"


const buttons = Buttons()
const timer = Timer()

buttonDarkMode.addEventListener('click', function() {
  buttons.darkMode()
})

buttonLightMode.addEventListener('click', function() {
  buttons.lightMode()
})

buttonSet.addEventListener('click', function() {
  timer.configTime()

})

buttonPlay.addEventListener('click', function() {
  buttons.play()
})

buttonStop.addEventListener('click', function() {
  buttons.stop()
})

volumeControlForest.addEventListener('change', function () {
  songForest.volume = this.value
})

volumeControlRain.addEventListener('change', function () {
  songRain.volume = this.value
}) 

volumeControlCafeteria.addEventListener('change', function () {
  songCafeteria.volume = this.value
}) 

volumeControlFireplace.addEventListener('change', function () {
  songFireplace.volume = this.value
}) 

iconForest.addEventListener('click', function() {
  songForest.play()
  songForest.loop = true

  iconForest.classList.add('on-icon')
  cardForest.classList.add('on-card')

  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card')

  wrapperInputRangeForest.classList.add('on-input-range', 'on-input-ball')
 
  songRain.pause()
  songCafeteria.pause()
  songFireplace.pause()
  }
  )

iconRain.addEventListener('click', function() {

  songRain.play()
  songRain.loop = true
 
  iconRain.classList.add('on-icon')
  cardRain.classList.add('on-card')
  
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card')

  wrapperInputRangeRain.classList.add('on-input-range', 'on-input-ball')

  songForest.pause()
  songCafeteria.pause()
  songFireplace.pause()
  }
  )

iconCafeteria.addEventListener('click', function() {
  songCafeteria.play()
  songCafeteria.loop = true

  iconCafeteria.classList.add('on-icon')
  cardCafeteria.classList.add('on-card')
  
  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')
  iconFireplace.classList.remove('on-icon')
  cardFireplace.classList.remove('on-card')

  wrapperInputRangeCafeteria.classList.add('on-input-range', 'on-input-ball')

  songRain.pause()
  songForest.pause()
  songFireplace.pause()
  }
  )
  
iconFireplace.addEventListener('click', function() {
  songFireplace.play()
  songFireplace.loop = true

  iconFireplace.classList.add('on-icon')
  cardFireplace.classList.add('on-card')
  
  iconRain.classList.remove('on-icon')
  cardRain.classList.remove('on-card')
  iconCafeteria.classList.remove('on-icon')
  cardCafeteria.classList.remove('on-card')
  iconForest.classList.remove('on-icon')
  cardForest.classList.remove('on-card')

  wrapperInputRangeFireplace.classList.add('on-input-range', 'on-input-ball')

  songRain.pause()
  songCafeteria.pause()
  songForest.pause()
  }
  )

  iconForest.addEventListener('dblclick', function(){
    songForest.pause()
  })

  iconRain.addEventListener('dblclick', function(){
    songRain.pause()
  })

  iconCafeteria.addEventListener('dblclick', function(){
    songCafeteria.pause()
  })

  iconFireplace.addEventListener('dblclick', function(){
    songFireplace.pause()
  })
