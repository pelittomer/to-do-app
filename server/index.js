const express = require('express')
const cors = require('cors')
const connectDB = require('./config/mongoDb.js')
const router = require('./routes/todoRoutes.js')


const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)



connectDB()
app.listen(3001, () => console.log("Server is started!"))