import express from "express"
import productsController from "../controllers/products.js"
import multer from "multer";
import path from "path";
const router = express.Router();

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null,'IMG' + "-" + Date.now() + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('img')



router.get("/products", productsController.all)
router.get("/products/:page",productsController.index);
router.get("/products/:id", productsController.productId)
router.get("/products/:category", productsController.productsCategory)

router.post("/products",fileUpload,productsController.createProduct);
router.get("/:image", productsController.getImage);

router.get("/user/:id",productsController.userId);
router.post("/user", productsController.createUser)


export default router;