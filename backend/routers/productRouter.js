const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.listProducts);
router.get("/:product_id", productController.getProduct);
router.get("/stock/:stock_code", productController.productInStock);
router.patch("/:product_id", productController.updateProduct);
router.post("/", productController.addProduct);
router.delete("/:product_id", productController.deleteProduct);

module.exports = router;
