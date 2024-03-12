import express from "express";
import morgan  from "morgan";
import path from "path";
import {fileURLToPath} from "url";

const app = express()
const PORT = process.env.PORT || 5000;

// middleware 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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