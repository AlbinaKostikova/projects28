const express = reqquire('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const USERS_FILE = './data/users.json'
const SECRET = 'mysecretkey'

function loadUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE))
  } catch {
    return []
  }
}
function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
}
router.post('/register', async (req, res) => {
  const { email, password } = req.body
  const users = loadUsers()
  if (users.find(u => u.email === email)) {
    return res.status(400),json({ message: "Email уже существует"})
  }
  const hashed = bcrypt.hashSync(password, 8)
  users.push({ email, password: hashed})
  saveUsers(users)
  res.json({ message: "Пользователь создан"})
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const users = loadUsers()
  const user = users.find(u => u.email === email)
  if (!user) return res.status(400).json({ message: 'Пользователь не найден' })
  if (!bcrypt.compareSync(password, user.password))
    return res.status(401).json({ message: "Неверный пароль"})
  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' })
  res.json({ token })
})
module.exports = router