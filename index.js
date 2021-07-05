require('dotenv').config({ path: 'variables.env' })
const express = require('express')
const connectDB = require('./config/database')
const app = express()

connectDB()

const PORT = process.env.PORT || 4000

app.use('/api/users', require('./routes/users.routes'))

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
