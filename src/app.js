import express from "express"
import mongoose from "mongoose";
import productRoutes from "./routes/products.js";
import path from "path"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.listen({port}, ()=>{
    {`Servidor corriendo en el puerto ${port}`}
});

app.set('view engine', 'ejs');

mongoose.connect(
    "mongodb+srv://bflabsweb:facu2704@sblabs.nnnbpyh.mongodb.net/test",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(() => console.log("Connected to mongoDB"))




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../images')))
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use("/",productRoutes)

export default app
