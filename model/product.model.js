const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    gender: {
        type: String, required: true
    },
    type: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    size: {
        type: [
            {
                type: String,
                enum: ['s', 'm', 'l', 'xl', '2xl', '3xl']
            }
        ], required: true
    },
    img: {
        type: [String], required: true
    },
    amount: {
        type: Number, required: true
    },
    describe: { type: String },
    reviews: {
        quantity: { type: Number, default: 0 },
        rating: { type: Number, default: 0 }
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Products', productSchema);
module.exports = { Product } 