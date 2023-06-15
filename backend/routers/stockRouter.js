const router = require("express").Router();
const stockController = require("../controllers/stockController");

router.get("/", stockController.listStocks);
router.patch("/:stock_code", stockController.updateStock);
router.post("/", stockController.addStock);
router.delete("/:stock_code", stockController.deleteStock);
router.get("/:stock_id", stockController.getStock);

module.exports = router;
