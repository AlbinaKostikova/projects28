const fs = require('fs')
const filePath = 'notes.json'

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync(filePath)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}
function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes, null, 2)
  fs.writeFileSync(filePath, dataJSON)
}
function addNote(title, body) {
  const notes = loadNotes()
  const duplicate = notes.find(note => note.title === title)

  if(!duplicate) {
    notes.push({ title, body })
    saveNotes(notes)
    console.log('Заметка добавлена!')
  } else {
    console.log('Заметка с таким заголовком уже существует!')
  }
  }
function removeNote(title) {
  const notes = loadNotes()
  const notesToKeep = notes.filter(note => note.title !== title)
  if(notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log('Заметка удалена!')
  } else {
    console.log('Заметка не найдена!')
  }
}
function listNotes() {
  const notes = loadNotes()
  console.log('Список заметок:')
  notes.forEach((note, i) => {
    console.log(`${i + 1}. ${note.title} - ${note.body}`)
  })
}
const command = process.argv[2]
switch (command) {
  case 'add':
    if (!process.argv[3] || !process.argv[4]) {
      console.log('Использование: node notes.js add "Заголовок" "Текст заметки"')
    } else {
      addNote(process.argv[3], process.argv[4])
    }
    break
  case 'remove':
    removeNote(process.argv[3])
    break
  case 'list':
    listNotes()
    break
  default:
    console.log('Неизвестная команда')
}