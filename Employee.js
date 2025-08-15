import express from 'express'
import router from './routes/routes.js'
import path from 'path'
import { fileURLToPath } from "url";
import methodOverride from 'method-override'

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.set('json spaces', 2)

app.use(express.urlencoded())
app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router)


app.listen(port, ()=>{
    console.log("Server is running at port ", port)
})