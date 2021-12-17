// 使用Mongoose库 来 操作 MondoDB数据库

const mongoose = require('mongoose');

// 配置数据库默认地址
const { dbURI } = require('../config/config.default')


// 连接MondoDB数据库
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// 当连接失败的时候
db.on('error', err => {
    console.log('MongoDB 数据库连接失败', err);
});

// 当连接成功的时候
db.once('open', function () {
    console.log("MongoDB 数据库连接成功");
});

// 组织导出模型类
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}

