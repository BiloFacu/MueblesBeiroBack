import express from "express"
import productsController from "../controllers/products.js"
const router = express.Router();

router.get("/products", productsController.all)
router.get("/products/:page",productsController.index);
router.get("/products/:id", productsController.productId)
router.get("/products/:category", productsController.productsCategory)
router.post("/products",productsController.createProduct);

router.get("/user/:id",productsController.userId);
router.post("/user", productsController.createUser)


export default router;