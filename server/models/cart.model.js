const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
  productType: {
    type: String,
  },
  mrp: {
    type: String,
  },
  price: {
    type: String,
  },
  save: {
    type: String,
  },

  off: {
    type: String,
  },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
