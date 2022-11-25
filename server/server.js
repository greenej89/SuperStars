const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin:"http://localhost:3000"
}))

require('./config/mongoose.config')
require('./routes/kid.routes')(app)
require('./routes/goal.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))