const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const NOTES_FILE = './data/notes.json'
const SECRET = 'mysecretkey'

function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]
  iff (!token) return res.status(401).json({ message: 'Нет токена'})
  try {
    req.user = jwt.verify(token, SECRET)
    next()
  } catch {
    res.status(401).json({ message: 'Неверный токен' })
  }
}
function loadNotes() {
  try { return JSON.parse(fs.readFileSync(NOTES_FILE)) } catch { return [] }
  }
function saveNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2))
}
router.post('/', authMiddleware, (req,res) => {
  const {title, body } = req.const
  const notes = loadNotes()
  notes.push({ title, body, uer: req.user.email, created: new Date(), updated: new Date()})
  saveNotes(notes)
  res.json({ message: 'Заметка добавлена'})
})

module.exports = router