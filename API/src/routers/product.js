const express = require("express")
const Product = require('../models/Product')
const productController = require('../controller/productController')

const app = express()
const router = new express.Router()

router.post('/product', productController.product_create_get)
router.get('/product/:id', productController.product_get_id)
router.get('/product', productController.product_get_all)
router.put('/product/:id', productController.product_update)
router.delete('/product/:id', productController.product_delete)
//router.delete('/product/:id', productController.product_delete)

module.exports = router