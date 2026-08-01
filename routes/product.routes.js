const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.get("/products", productController.getallProducts);
router.get("/products/:id", productController.getproductByid);
router.post("/products/add", productController.addnewProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;