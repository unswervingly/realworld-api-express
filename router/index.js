// 路由模块的中间件
const express = require('express')

// 1. 创建路由实例
// 路由实例相当于一个 mini Express实例
const router = express.Router()

// 2. 配置路由,可以是中间件
// 用户相关路由
router.use(require("./user"));

// 用户资料相关路由
router.use("/profiles", require("./profile"));

// 文章相关路由
router.use("/articles", require("./article"));

// 标签相关路由
router.use(require("./tag"));



// 3. 导出路由实例
module.exports = router

// 4. 将路由挂载集成到 Express实例应用中[挂载]