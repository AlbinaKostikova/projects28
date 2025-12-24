const placeholders = document.querySelectorAll('.task-list')
const input = document.getElementById('task-input')
const addBtn = document.getElementById('inputBtn')

let currentItem = null

addBtn.addEventListener('click', () => {
  const value = input.value.trim()
  if (!value) return

  const taskItem = document.createElement('p')
  taskItem.innerText = value
  taskItem.classList.add('item')
  taskItem.setAttribute('draggable', 'true')

  taskItem.addEventListener('dragstart', dragStart)
  taskItem.addEventListener('dragend', dragEnd)

  placeholders[0].append(taskItem)
  input.value = ''
})

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
})

function dragStart(event) {
  currentItem = event.target
  event.dataTransfer.setData('text/plain', event.target.textContent)
  event.dataTransfer.effectAllowed = 'move'
  currentItem.classList.add('hold')
  setTimeout(() => {
    currentItem.classList.add('hide')
  }, 0);
}

function dragEnter(event) {
  event.preventDefault()
  event.currentTarget.classList.add('hovered')    
}
function dragEnd(event) {
  currentItem.classList.remove('hold', 'hide')
  currentItem = null
}
function dragOver(event) {
  event.preventDefault()
}

function dragLeave(event) {
  event.currentTarget.classList.remove('hovered')    
}
function dragDrop(event) {
  event.preventDefault()
  if (event.currentTarget.classList.contains('task-list') && currentItem) {
    event.currentTarget.appendChild(currentItem)
    event.currentTarget.classList.remove('hovered')    
  }}