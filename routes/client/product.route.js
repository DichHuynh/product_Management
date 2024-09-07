const express = require("express"); // gọi để tạo hàm
const router = express.Router(); //tạo các router

const controller = require("../../controllers/client/product.controller");

router.get("/",controller.index);
router.get("/:slug",controller.detail);
module.exports = router;