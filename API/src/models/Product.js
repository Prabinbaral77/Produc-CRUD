const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
    PId:{
        type: Number,
        unique: true,
        required: true
    },
    itemName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type:String
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', mongooseSchema)

module.exports = Product