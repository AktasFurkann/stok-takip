const Product = require("../models/productModel");

const listProducts = async (req, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
};

const getProduct = async (req, res) => {
  const { product_id } = req.params;

  try {
    const response = await Product.findById(product_id);
    res.json(response);
  } catch (error) {
    console.log("There was an error while getting the product: " + error);
  }
};

const productInStock = async (req, res) => {
  const { stock_code } = req.params;

  try {
    const response = await Product.findOne({ stockCode: stock_code });
    res.json(response);
  } catch (error) {
    console.log(
      "There was an error while getting the product in stock: " + error
    );
  }
};

const updateProduct = async (req, res) => {
  const { product_id } = req.params;

  try {
    const update = await Product.findByIdAndUpdate(product_id, req.body);
    res.json(update);
  } catch (error) {
    console.log("There was an error while updating the product: " + error);
  }
};

const addProduct = async (req, res) => {
  try {
    const toBeAdded = new Product(req.body);
    const response = await toBeAdded.save();
    res.send(response);
  } catch (error) {
    console.log("There was an error while adding the product: " + error);
  }
};

const deleteProduct = async (req, res) => {
  const { product_id } = req.params;

  try {
    const deleted = await Product.findByIdAndDelete(product_id);
    res.send(deleted);
  } catch (error) {
    console.log("There was an error while deleting the product: " + error);
  }
};

module.exports = {
  listProducts,
  getProduct,
  updateProduct,
  addProduct,
  deleteProduct,
  productInStock,
};
