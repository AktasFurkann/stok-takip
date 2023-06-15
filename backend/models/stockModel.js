const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
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
    unitPrice: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      trim: true,
    },
  },
  { collection: "stocks", timestamps: true }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
