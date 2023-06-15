const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    stockCode: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
    group: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    price: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    stockStatus: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
  },
  { collection: "products", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
