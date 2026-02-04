const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const notesRoutes = require('./routes/notes')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)

app.listen(3000, () => console.log('Server started on http://localhost:3000 '))