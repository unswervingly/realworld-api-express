// 路由模块的中间件
const express = require('express')

// 第三方中间件
const { body, validationResult } = require("express-validator");

// 用户处理请求的函数
const userCtrl = require('../controller/user');
// 数据验证的中间件
const userValidator = require('../validator/user');

// 身份认证中间件
const auth = require('../middleware/auth')


// 1. 创建路由实例
// 路由实例相当于一个 mini Express实例
const router = express.Router()

// 2. 配置路由
// 用户登录
router.post('/users/login', userValidator.login, userCtrl.login)

// 用户注册
router.post('/users', userValidator.register, userCtrl.register) //执行具体的控制器处理

// 获取当前登录用户
router.get('/users', auth, userCtrl.getCurrentUser)

// 更新当前登录用户
router.put('/users', auth, userCtrl.updateUser)



// 3. 导出路由实例
module.exports = router

// 4. 将路由挂载集成到 Express实例应用中[挂载]