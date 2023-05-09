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
router.get("/products/:category", productsController.productsCategory)
router.get("/product/:id", productsController.productId)
router.put("/product/:id", productsController.updateProduct)
router.delete("/product/:id", productsController.deleteProduct)


router.post("/products", fileUpload, productsController.createProduct);
router.use("/public", express.static(path.join(__dirname, '../images')))

router.get("/:image", productsController.getImage);
router.put("/cbu", productsController.updateCbu);
router.get("/cbus", productsController.getCbu);

router.post("/emails", productsController.postEmails)

router.get("/users",productsController.getUser);
router.post("/user", productsController.createUser)


export default router;