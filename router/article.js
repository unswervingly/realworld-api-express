const express = require("express");

// 文章处理请求的函数
const articleCtrl = require('../controller/article')

// 身份认证中间件
const auth = require('../middleware/auth')

const router = express.Router();

// 列出文章
router.get("/", articleCtrl.listArticles);

// 饲料文章
router.get("/feed", articleCtrl.feedArticles);

// 获取文章
router.get("/:slug", articleCtrl.getArticles);

// 创建文章
router.post("/", auth, articleCtrl.createArticles);

// 更新文章
router.put("/:slug", articleCtrl.updateArticles);

// 删除文章
router.delete("/:slug", articleCtrl.deleteArticles);

// 为文章添加评论
router.post("/:slug/comments", articleCtrl.addCommentsArticles);

// 从文章中获取评论
router.get("/:slug/comments", articleCtrl.getCommentsArticles);

// 删除评论
router.delete("/:slug/comments/:id", articleCtrl.deleteComment);

// 最喜欢的文章
router.post("/:slug/favorite", articleCtrl.favoriteArticle);

// 不喜欢的文章
router.delete("/:slug/favorite", articleCtrl.unfavoriteArticle);

module.exports = router;
