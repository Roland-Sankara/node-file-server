import express from "express";
import morgan from 'morgan';
// import path from 'path'
// import { fileURLToPath } from 'url';

const app = express()
const PORT = process.env.PORT || 5000;
// middleware 
app.use(morgan('dev'))

// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory

// app.use(express.static(path.join(__dirname, "Public")))

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