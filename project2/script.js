const inputTask = document.querySelector('.taskInput')
const inputTime = document.querySelector('.taskTime')
const submitBtn = document.querySelector('.addBtn')
const taskList = document.querySelector('.taskList')
const selectedTaskField = document.querySelector('.selected-task')
const deleteButtons = document.querySelectorAll('.deleteBtn')

let hoursTimer = document.querySelector('.hours')
let minutesTimer = document.querySelector('.minutes')
let secondsTimer = document.querySelector('.seconds')
let timerInterval = null
let totalSeconds = 0
let newItem = null
let selectedTask = null

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (!inputTask.value) return
  newItem = document.createElement('div')
  newItem.classList.add('taskItem')

  const taskText = document.createElement('span')
  taskText.textContent = inputTask.value + ' ' + inputTime.value
  newItem.appendChild(taskText)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('deleteBtn')
  deleteBtn.textContent = 'Delete' 
  deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    newItem.remove()
  })
  newItem.appendChild(deleteBtn)

  newItem.addEventListener('click', () => {
    selectedTaskField.textContent = taskText.textContent
  })
  taskList.appendChild(newItem)

  inputTask.value = ''
  inputTime.value = ''
})

startBtn = document.querySelector('.startBtn')
startBtn.addEventListener('click', () => {
  clearInterval(timerInterval)
  const selectedTime = selectedTaskField.textContent.split(' ').pop()
  if (!selectedTime) return
  let [hours, minutes] = selectedTime.split(':').map(Number)
  let totalSeconds = hours * 3600 + minutes * 60
  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval)
      alert('Time is up!')
      return
    }
    totalSeconds--;
    hoursTimer.textContent = Math.floor(totalSeconds / 3600)
    if (hoursTimer.textContent < 10) {
      hoursTimer.textContent = '0' + hoursTimer.textContent
    }
    minutesTimer.textContent = Math.floor((totalSeconds % 3600) / 60)
    if (minutesTimer.textContent < 10) {
      minutesTimer.textContent = '0' + minutesTimer.textContent
    }
    secondsTimer.textContent = totalSeconds % 60
    if (secondsTimer.textContent < 10) {
      secondsTimer.textContent = '0' + secondsTimer.textContent
    }
  }, 1000)
})
finishBtn = document.querySelector('.finishBtn')
finishBtn.addEventListener('click', () => {
  clearInterval(timerInterval)
  hoursTimer.textContent = '00'
  minutesTimer.textContent = '00'
  secondsTimer.textContent = '00'

})
refuseBtn = document.querySelector('.refuseBtn')
refuseBtn.addEventListener('click', () => {
  hoursTimer.textContent = '00'
  minutesTimer.textContent = '00'
  secondsTimer.textContent = '00'
  clearInterval(timerInterval)
  alert('Вот ты лошара!')
})