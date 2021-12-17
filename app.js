const express = require("express");

// 第三方中间件
const morgan = require("morgan");
const cors = require("cors");

// 导入 路由级别中间件
const router = require('./router/index')
// 导入 配置统一错误处理中间件
const errorHandler = require("./middleware/error-handler");

// 导入 数据库
require('./model')

const app = express();


// 添加中间件
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


const PORT = process.env.PORT || 8081;


// 4. 挂载路由 (路由级别中间件)
app.use('/api', router)


// 挂载统一处理服务端错误中间件
app.use(errorHandler());


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
