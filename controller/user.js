const { User } = require('../model')
const jwt = require('../util/jwt')

const { jwtSecret } = require('../config/config.default')

//  提取控制器模块
// 将具体的处理请求的操作提取到控制器模块中

// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 1. 数据验证
        // 2.生成token
        // 拿到 用户信息, 因为在 validator中的登录验证，已经挂载了
        const user = req.user.toJSON()

        // 把用户的id传过来就可以
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret)
        // 3.发送成功响应(包含 token 的用户信息)
        delete user.password
        res.status(200).json({
            // 把用户信息和token返回给客户端，
            ...user,
            token
        });
    } catch (err) {
        next(err);
    }
};

// 用户注册
exports.register = async (req, res, next) => {
    try {
        // 1. 获取请求体数据
        console.log(req.body);
        let user = new User(req.body.user)

        // 2. 数据验证
        // 2.1 基本数据验证
        // 2.2 业务数据验证

        // 3. 验证通过，将保存到数据库
        await user.save()

        // users是特殊的对象,要转换成json对象 才可以删除
        user = user.toJSON();

        // 不希望密码发送给客户端
        delete user.password;

        // 4. 发送成功响应
        res.status(201).json({
            // 把添加之后的资源返回给客户端
            user
        });
    } catch (err) {
        next(err);
    }
};

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err);
    }
};

// 更新用户
exports.updateUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("put /user");
    } catch (err) {
        next(err);
    }
};
