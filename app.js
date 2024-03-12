const express = require("express");
const morgan  = require("morgan");
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000;

// middleware 
app.use(morgan('dev'))
app.use(express.json(path.join(__dirname, "Public")));

// Route Handler
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "Public", "home.html"))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, "Public", "contact.html"))
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})