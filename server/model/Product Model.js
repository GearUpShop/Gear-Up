const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    category: { type: String, enum: ['tools', 'cleaning', 'security', 'accessories', 'mobile', 'lights'], required: true },
    isDeleted: { type: Boolean, default: false },
    isTopSelling: { type: Boolean, default: false },
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
