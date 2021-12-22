const jwt = require('jsonwebtoken')

const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)



// sign 生成 jwt
/*
    jwt.sign()
    参数一：payload 意为 “负荷” ，在这里是需要加密的数据。
    参数二：secret 就是真正加密的 key
    参数三：可以使用异步
*/
// 默认同步签名 (HMAC SHA256)
// const token = jwt.sign({
//     foo: 'bar'
// }, 'czm')

// console.log(token);

// 异步签名
// jwt.sign({ foo: 'bar' }, 'czm', (err, token) => {
//     if (err) {
//         return console.log('生成 token 失败');
//     }

//     console.log(token);
// });


// verify 验证jwt
// 同步签名
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Mzk5OTU4NDd9.NK2giC1nYtGJomVF1wi72gvxFFrrKTtKaCsJDVGhzKg','czm')
// console.log(ret);

// 异步签名
// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Mzk5OTU4NDd9.NK2giC1nYtGJomVF1wi72gvxFFrrKTtKaCsJDVGhzKg',
//     'czm', (err, ret) => {
//         if (err) {
//             return console.log('=token 认证失败');
//         }
//         console.log(ret);
//     })

// jwt.decode  不做验证直接解析jwt数据
