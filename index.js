import express from "express";
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

// middleware 
app.use(morgan('dev'))

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.static(path.join(__dirname, "Public")))

// Route Handler
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "Public", "home.html"))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, "Public", "contact.html"))
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})