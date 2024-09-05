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


module.exports = { Create};