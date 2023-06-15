const Stock = require("../models/stockModel");

const listStocks = async (req, res) => {
  const allStock = await Stock.find();
  res.json(allStock);
};

const addStock = async (req, res) => {
  try {
    const addedStock = new Stock(req.body);
    const response = await addedStock.save();
    res.send(response);
  } catch (error) {
    console.log("Error while adding stock: " + error);
  }
};

const updateStock = async (req, res) => {
  const { stock_code } = req.params;
  try {
    const update = await Stock.findOneAndUpdate(
      { product: stock_code },
      { total: req.body.total, unitPrice: req.body.unitPrice }
    );
    res.json(update);
  } catch (error) {
    console.log("Error while updating stock: " + error);
  }
};

const deleteStock = async (req, res) => {
  const { stock_code } = req.params;
  try {
    const deleted = await Stock.findOneAndDelete(stock_code);
    res.send(deleted);
  } catch (error) {
    console.log("error occurred while deleting data! " + error);
  }
};

const getStock = async (req, res) => {
  const { stock_id } = req.params;
  try {
    const response = await Stock.findOne({ product: stock_id });
    res.json(response);
  } catch (error) {
    console.log("There was an error while getting the product: " + error);
  }
};

module.exports = {
  listStocks,
  addStock,
  updateStock,
  deleteStock,
  getStock,
};
