//  提取控制器模块
// 将具体的处理请求的操作提取到控制器模块中

// 获取个人资料
exports.getProfile = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /profile/:username");
    } catch (err) {
        next(err);
    }
}

// 关注用户
exports.followUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /profile/:username/follow");
    } catch (err) {
        next(err);
    }
}

// 取消关注用户
exports.unFollowUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /profile/:username/follow");
    } catch (err) {
        next(err);
    }
}

