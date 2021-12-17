const express = require("express");

// 用户处理请求的函数
const tagCtrl = require('../controller/tag')

const router = express.Router();

// 获取标签
router.get("/tags", tagCtrl.getTags);

module.exports = router;
