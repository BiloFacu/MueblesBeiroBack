import Products from "../models/products.js"
import User from "../models/user.js"
import path from "path"
import fs from 'fs'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controllers = {
    index : async (req,res)=>{
        let page = req.params.page;

        const products = await Products.paginate({},{page: page,limit: 10});
        console.log(products)
        res.send(products)
    },
    all : async (req,res) => {
        const products = await Products.find()
        console.log(products)
        res.send(products)
    },
    productId : async (req, res) =>{
        const id = req.params.id
        const product = await Products.find({
            _id:id
        })
        res.send(product)
    },
    getImage : async (req, res) => {
      const image = req.params.image;
      const pathImage = path.resolve(__dirname, `../images/${image}`);
      if(await fs.existsSync(pathImage)){
        res.sendFile(pathImage)
      }
    },
    productsCategory : async (req, res) => {
        const category = req.params.category
        console.log(category)
        const products = await Products.find({
            category:category
        })
        console.log(products)
        res.send(products)
    },
    userId : async (req,res) => {
        let id = req.params.id
        const user = await User.find({
            _id:id
        })
        res.send(user)
    },
    createProduct : async (req,res) => {
        console.log(req.file)
        /* const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename)) */
        const product = new Products({
            name: req.body.name,
            description: req.body.description,
            brand: req.body.brand,
            price: req.body.price,
            img: req.file.filename,
            category: req.body.category,
            stock: req.body.stock
        })
        product.save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: 'Producto creado exitosamente',
            product: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    },
    createUser : async (req,res) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            zipCode: req.body.zipCode,
            creditCard: req.body.creditCard
        })
        user.save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
}

export default controllers;