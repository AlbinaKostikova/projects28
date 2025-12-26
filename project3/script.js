const contextMenu = document.querySelector('.menu')
// контекстное меню
window.addEventListener('contextmenu', event => {
  event.preventDefault()
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


//