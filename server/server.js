const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:"http://localhost:3000"
}))

require('./config/mongoose.config')

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))