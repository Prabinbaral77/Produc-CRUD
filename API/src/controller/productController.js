const { findOneAndUpdate } = require('../models/Product')
const Product = require('../models/Product')

exports.product_create_get = async function(req, res) {
    const product = new Product(req.body)

    try{
    //get the id of the current product
    const query = await Product.find({}).sort({createdAt: -1})
    // const lastProductId = query[0].itemName
    const lastProductId = query[0].PId
    const newProductId = lastProductId + 1
    product.PId = newProductId
        if(!product.price){
            return res.status(400).send("Please enter the price of the product")
        }else{
            await product.save()
            res.status(201).send("product added sucessfully!")
        }
    }catch(e){
        res.status(400).send("Invalid Operation")
    }

}
exports.product_update = async function(req, res) {

    try{
        const product = await Product.findOneAndUpdate({PId: req.params.id},{$set:{
                itemName: req.body.itemName,
                price: req.body.price,
                description: req.body.description,
                ingredients: req.body.ingredients
              
        }   
        })
        res.status(200).json(
            product)
    }catch(e){
        res.status(400).send("Invalid Operation")
    }
}

exports.product_get_id = async function(req, res) {
    try{
        const product = await Product.find({PId: req.params.id})
        res.status(200).send(product)
    }catch(e){
        res.status(400).send(e)
    }
}

exports.product_get_all = async function(req, res) {
    try{
        const product = await Product.find({})
        res.status(200).send(product)
    }catch(e){
        res.status(400).send(e)
    }
}

exports.product_delete = async function(req, res) {
    try{
        const product = await Product.findOneAndDelete({PId: req.params.id})
        res.status(200).send("product deleted sucessfully")
    }catch(e){
        res.status(400).send(e)
    }
}