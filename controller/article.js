// 列出文章
exports.listArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /");
    } catch (err) {
        next(err);
    }
}

// 饲料文章
exports.feedArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/feed");
    } catch (err) {
        next(err);
    }
}

// 获取文章
exports.getArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/:slug");
    } catch (err) {
        next(err);
    }
}

// 创建文章
exports.createArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles");
    } catch (err) {
        next(err);
    }
}

// 更新文章
exports.updateArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("put /articles/:slug");
    } catch (err) {
        next(err);
    }
}

// 删除文章
exports.deleteArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug");
    } catch (err) {
        next(err);
    }
}

// 为文章添加评论
exports.addCommentsArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
}

// 从文章中获取评论
exports.getCommentsArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
}

// 删除评论
exports.deleteComment = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/comments/:id");
    } catch (err) {
        next(err);
    }
}

// 最喜欢的文章
exports.favoriteArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
}

// 不喜欢的文章
exports.unfavoriteArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
}
