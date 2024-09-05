const Product = require("../models/product.model");

const Create = async (req, res) => {
  try {
    const { name, imageUrl, productType, mrp, price, save, off } = req.body;
    const product = await Product.create({
      name,
      imageUrl,
      productType,
      mrp,
      price,
      save,
      off,
    });

    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error in creating product" });
  }
};

const Products = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Create,Products };
