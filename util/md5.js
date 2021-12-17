// 密码存储在数据库中是明文存储的，应该采用密文存储
// 明文通过md5算法转换成密文

const crypto = require('crypto')

// 获取 crypto 支持的散列算法
// console.log(crypto.getHashes());

// 使用
// const result = crypto.createHash("md5")
//     .update("hello")
//     .digest("hex");

// 获取结果
// console.log(result)
module.exports = str => {
    return crypto.createHash('md5')
        .update("czm" + str)
        .digest("hex");
}