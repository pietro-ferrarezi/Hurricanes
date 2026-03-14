const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const env = process.env
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname, "../../Front/public")))
const PORT = env.PORT || 3040

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Front/views", "index.html"))
})

app.get("/donate", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Front/views", "donate_area.html"))
})

app.listen(PORT, '0.0.0.0', () => console.log(`Server Running! Link: http://localhost:${PORT}`))