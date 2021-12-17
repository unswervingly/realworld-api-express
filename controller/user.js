const { User } = require('../model')


//  提取控制器模块
// 将具体的处理请求的操作提取到控制器模块中

// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 1. 数据验证
        // 2.生成token
        // 3.发送成功响应(包含 token 的用户信息)
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
        res.send("get /user");
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
