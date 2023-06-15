const express = require("express");
require("./db/dbConnection");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const productRouter = require("./routers/productRouter");
const stockRouter = require("./routers/stockRouter");

app.use("/api/products", productRouter);
app.use("/api/stocks", stockRouter);

app.use("/", (req, res) => {
  res.json({ welcome: "you are in backend" });
});

app.listen(4000, () => {
  console.log("connected from port 4000");
});
