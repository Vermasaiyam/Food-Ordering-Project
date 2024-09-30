const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    customer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    items:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItem",
    }],
    total: Number,
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;