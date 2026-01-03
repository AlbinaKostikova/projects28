const contextMenu = document.querySelector('.menu')
// контекстное меню
window.addEventListener('contextmenu', event => {
  event.preventDefault()
  backTimerWindow.style.display = 'none'
  timer.style.display = 'none'
  backTimerMessage.style.display = 'none'
  if (event.target.classList.contains('menu')) return
  const coordinateX = event.clientX
  const coordinateY = event.clientY
  contextMenu.style.display = 'none'
  const winWidth = window.innerWidth
  const winHeight = window.innerHeight
  const menuWidth = 200
  const menuHeight = 250
  let posX = coordinateX
  let posY = coordinateY
  if (posX + menuWidth > winWidth) {
    posX = winWidth - menuWidth - 5
  }
  if (posY + menuHeight > winHeight) {
    posY = winHeight - menuHeight - 5
  }
  contextMenu.style.left = `${posX}px`
  contextMenu.style.top = `${posY}px`
  contextMenu.style.display = 'flex'
})
window.addEventListener('click', event => {
  if (event.target.classList.contains('menu')) return
  contextMenu.style.display = 'none'
})

// Меняем цвет фона
const colors = ['blue', 'green', 'red', 'purple', 'orange']
const changeBg = document.querySelector('.changeBg')
const main = document.querySelector('.main')
changeBg.addEventListener('click', () => {
  main.style.background = colors[Math.floor(Math.random() * colors.length)]
})

//Счетчик кликов
const timerBtn = document.querySelector('.timerBtn')
const clickCounter = document.querySelector('.clickCounter')
const timer = document.querySelector('.timer')
const input = document.querySelector('.timer-input')
const timerDisplay = document.querySelector('.timerDisplay')
const clickField = document.querySelector('.clickField')

let timerInterval = null
let counting = false

clickCounter.addEventListener('click', () => {
  timer.style.display = 'flex'
  timer.style.zIndex = '100'
})

timerBtn.addEventListener('click', () => {  
  let counter = Number(input.value)
  timer.style.display = 'none'
  clickField.style.zIndex = '20'
  clickField.style.display = 'flex'

  if (timerInterval) clearInterval(timerInterval)
  timerInterval = null

  if (!counter || counter <= 0) return
  timerDisplay.innerText = counter  
  timerDisplay.style.display = 'flex'  

  let clicks = 0
  counting = true

  const clickHandler = () => { clicks++ }
  window.addEventListener('click', clickHandler)

  timerInterval = setInterval(() => {
    counter--    
    timerDisplay.innerText = counter
    if (counter <= 0) {
      clearInterval(timerInterval)
      timerInterval = null
      timerDisplay.style.display = 'none'
      clickField.style.zIndex = '0'
      const message = document.querySelector('.message')
      message.innerText += clicks
      message.style.display = 'flex'
      message.style.zIndex = '3000'
      counting = false
      window.removeEventListener('click', clickHandler)
    }
  }, 1000)
  })

// Рандомные фигуры
const shapes = [
  {
    type: 'square',
    width: 50,
    height: 50,
    borderRadius: '0',
    rotate: 0,
  },
  {
    type: 'circle',
    width: 50,
    height: 50,
    borderRadius: '50%',
    rotate: 0,
  },
  {
    type: 'rectangle',
    width: 50,
    height: 30,
    borderRadius: '8px',
    rotate: 0,
  },
  {
    type: 'oval',
    width: 60,
    height: 20,
    borderRadius: '50%',
    rotate: 0,
  },
  {
    type: 'diamond',
    width: 10,
    height: 10,
    borderRadius: '0',
    rotate: 45,
  },
]
const createFigure = document.querySelector('.createFigure')
createFigure.addEventListener('click', () => {
  const figure = document.createElement('div')
  const shape = shapes[Math.floor(Math.random() * shapes.length)]
  const multiplier = Math.floor(Math.random() * 5 + 1)
  const width = shape.width * multiplier
  const height = shape.height * multiplier

  figure.style.position = 'absolute'
  figure.style.width = width + 'px'
  figure.style.height = height + 'px'
  figure.style.borderRadius = shape.borderRadius
  figure.style.transform = `rotate(${shape.rotate}deg)`
  figure.style.zIndex = '10'

  const colorsArr = ['blue', 'green', 'red', 'purple', 'orange']
  figure.style.backgroundColor = colorsArr[Math.floor(Math.random() * colorsArr.length)]

  const maxX = window.innerWidth - width
  const maxY = window.innerHeight - height
  figure.style.left = Math.floor(Math.random() * maxX) + 'px'
  figure.style.top = Math.floor(Math.random() * maxY) + 'px'

  main.append(figure)
})



// обратный таймер
const backTimerWindow = document.querySelector('.backTimer')
const timerBackMenu = document.querySelector('.timerBack')
const backTimerInputForm = document.querySelector('.backTimer-inputForm')
const backTimerBtn = document.querySelector('.backTimer-btn')
const backTimerCounting = document.querySelector('.backTimer-counting')
const backTimerMessage = document.querySelector('.backTimer-message')
const backHours = document.querySelector('.backHours')
const backMinutes = document.querySelector('.backMinutes')
const backSeconds = document.querySelector('.backSeconds')

let hours = null
let minutes = null
let seconds = null
let backTimerInterval = null

timerBackMenu.addEventListener('click', () => {
  backTimerWindow.style.display = 'flex'
  backTimerWindow.style.zIndex = '3000'
  backTimerInputForm.style.display = 'flex'

  backTimerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    backTimerCounting.style.display = 'flex'
    backTimerInputForm.style.display = 'none'
    const timerBackInputTime = document.querySelector('.backTimer-input')
    let parts = timerBackInputTime.value.split(':')
    hours = Number(parts[0]) || 0
    minutes = Number(parts[1]) || 0
    seconds = 0

    backHours.innerText = hours
    backMinutes.innerText = minutes
    backSeconds.innerText =  seconds

    if (backTimerInterval) clearInterval(backTimerInterval)

    backTimerInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(backTimerInterval)
        backTimerMessage.style.display = 'flex'
        backTimerCounting.style.display = 'none'
        return
      }
      if (seconds > 0) {
        seconds--
      } else {
        seconds = 59
        if (minutes > 0) {
          minutes--
        } else {
          minutes = 59
          hours--
        }
      }
      backHours.innerText = hours
      backMinutes.innerText = minutes
      backSeconds.innerText = seconds
    }, 1000)
  })
  })


  // рндомный звук
  const randomSound = document.querySelector('.randomSound')
  const sounds = [
    './sounds/1.mp3',
    './sounds/2.mp3',
    './sounds/3.mp3',
    './sounds/4.mp3',
    './sounds/5.mp3',
    './sounds/6.mp3',
  ]
  randomSound.addEventListener('click', () => {
    const sound = sounds[Math.floor(Math.random() * sounds.length)]
    const audio = new Audio(sound)
    audio.play()
  })

  // cообщение
const callMessage = document.querySelector('.callMessage')
const jason = document.querySelector('.jason')
const jasonText = document.querySelector('.jason-message')
const messages = [
  'Карты, деньги, два ствола, три банана, огурец, суп, картошка, холодец, кетчуп, яйца, майонез.',
  'Шаг влево, шаг вправо - два шага.',
  'Вчера играл на гитаре и выиграл.',
  'Я всегда говорю себе, что надо перестать пить, но я не слушаю советов от алкоголиков.',
  'Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.'
] 
const notification = new Audio('./message.mp3')
callMessage.addEventListener('click', () => {
  notification.play()
  jasonText.innerText = ''
  jason.style.display = 'flex'
  jason.style.zIndex = '4000'
  jasonText.innerText = messages[Math.floor(Math.random() * messages.length)]

  jason.style.opacity = '1'
  setTimeout(() => {
    jason.style.opacity = '0'
  }, 7000)

})

// диораммы что бы это ни значило
const watchDiogram = document.querySelector('.watchDiogram')
const diogramWindow = document.querySelector('.video-player')
const video = document.querySelector('#video')
const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#prevBtn')
const stopBtn = document.querySelector('#stopBtn')
const volume = document.querySelector('#volume')

const videos = [
  '/videos/gametheory.mp4',
  '/videos/game.mp4',
  '/videos/ageofempites.mp4',
  '/videos/nyancat.mp4'
]
let index = 0
video.src = videos[index]

watchDiogram.addEventListener('click', () => {
  diogramWindow.style.display = 'flex'
  video.play()
})
nextBtn.addEventListener('click', () => {
  index++
  if (index >= videos.length) index = 0
  video.src = videos[index]
  video.play()
})
prevBtn.addEventListener('click', () => {
  index--
  if (index < 0 ) index = videos.length - 1
  video.src = videos[index]
  video.play()
})
stopBtn.addEventListener('click', () => {
  video.pause()
})
volume.addEventListener('input', () => {
  video.volume = volume.value
})

//Сброс всего

const resetAll = document.querySelector('.resetAll')
resetAll.addEventListener('click', () => {
  backTimerWindow.style.display = 'none'
  timer.style.display = 'none'
  backTimerMessage.style.display = 'none'
  jason.style.display = 'none'
  diogramWindow.style.display = 'none'
  timerDisplay.style.display = 'none'
  clickField.style.zIndex = '0'
  if (backTimerInterval) {
    clearInterval(backTimerInterval)
    backTimerInterval = null
  }
  hours = 0
  minutes = 0
  seconds = 0
  backHours.innerText = ''
  backMinutes.innerText = ''
  backSeconds.innerText = ''
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  document.querySelectorAll('.main > div:not(.menu):not(.video-player)').forEach(el => {
    if (!el.classList.contains('backTimer') && !el.classList.contains('message')) el.remove()
  })
  counting = false
  video.pause()
  video.currentTime = 0
  index = 0
  video.src = videos[index]
})