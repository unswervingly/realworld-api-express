//  提取控制器模块
// 将具体的处理请求的操作提取到控制器模块中

// 获取标签
exports.getTags = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /tags");
    } catch (err) {
        next(err);
    }
}