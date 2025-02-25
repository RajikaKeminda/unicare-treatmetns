const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Herbal Supplements',
      'Ayurvedic Oils',
      'Personal Care Products',
      'Ayurvedic Teas and Beverages',
      'Ayurvedic Medicines',
    ], // Updated categories
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 1,
  },
  images: [{
    type: String, // URLs to product images
    required: true,
  }],
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
