/**
 * 默认配置
 */


module.exports = {
    //  配置数据库默认地址
    dbURI: "mongodb://localhost:27017/realWorld",
    // JWT的原理就是服务端根据secret生成token，当然secret只有服务器自己才知道是多少，也就让token只能是由服务端签发
    // 网上搜索 uuid 生成
    jwtSecret: 'c7adf0d9-2c70-6eb7-352c-ffea7c8a98a3'
};
