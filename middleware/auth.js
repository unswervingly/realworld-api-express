// 身份认证中间件

// 拿到 验证jwt
const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model/index')

module.exports = async (req, res, next) => {
    // 1. 从请求头获取 token 数据
    let token = req.headers.authorization
    // 截取 token
    token = token
        ? token.split('Bear ')[1]
        : null
    // 判断 token 是否存在
    if (!token) {
        return res.status(401).end()
    }

    // 2. 验证 token 是否有效
    try {
        // 4. 有效 -> 把用户信息读取出来挂载到 req 请求对象上
        //            继续往后执行
        // 解码
        const decodedToken = await verify(token, jwtSecret)
        const user = await User.findById(decodedToken.userId)
        req.user = user
        next()
    } catch (error) {
        // 3. 无效 -> 响应 401 状态码
        return res.status(401).end()
    }
}