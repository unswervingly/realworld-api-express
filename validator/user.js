// 数据验证问题 的中间件

const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { User } = require("../model");
const md5 = require('../util/md5')

// 注册验证
exports.register = validate([
    // 1. 配置验证规则
    body('user.username')
        .notEmpty().withMessage("用户名不能为空")
        // 自定义验证
        .custom(async (value) => {
            // 查询数据库 查看数据是否存在
            const user = await User.findOne({ username: value });
            if (user) {
                return Promise.reject("用户已存在");
            }
        }),

    body('user.password').notEmpty().withMessage("密码不能为空"),

    body('user.email').notEmpty()
        .withMessage("邮箱不能为空")
        .isEmail().withMessage("邮箱格式不正确")
        .bail() // 如果上面错误就不向下执行
        .custom(async value => {
            // 查询数据库查看 email数据是否存在
            const user = await User.findOne({ email: value })
            if (user) {
                return Promise.reject("邮箱已存在");
            }
        }),
]);


// 登录验证
exports.login = [
    validate([
        body("user.email").notEmpty().withMessage("邮箱不能为空"),
        body("user.password").notEmpty().withMessage("密码不能为空"),
    ]),
    // 用户是否存在
    validate([
        body("user.email").custom(async (email, { req }) => {
            // select 查询数据不会有 密码,添加这个属性就可以拿到了
            const user = await User.findOne({ email }).select([
                "email",
                "password",
                "username",
                "bio",
                "image",
            ])
            // 查询数据库查看数据是否存在
            if (!user) {
                return Promise.reject("用户不存在");
            }
            // 将数据挂载到请求对象中，后续的中间件也可以直接使用，就不需要重复查询了
            req.user = user;
        }),
    ]),

    // 验证密码是否正确
    validate([
        body("user.password").custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject("密码错误");
            }
        }),
    ]),
]