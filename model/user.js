// 设计数据模型
const mongoose = require('mongoose');

// 公共的Schema
const baseModel = require('./base-model')

// 密码存储在数据库中是明文存储的，应该采用密文存储
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({

    ...baseModel,

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        // 设置密码为密文
        set: value => md5(value),
        // 查询数据的时候就不会有 密码
        select: false,
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
});

module.exports = userSchema