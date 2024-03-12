const express = require("express");
const morgan  = require("morgan");

const app = express()
const PORT = process.env.PORT || 5000;
// middleware 
app.use(morgan('dev'))


// Route Handler
app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

app.get('/contact', (req, res)=>{
    res.send("Welcome to the Contact Page")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})