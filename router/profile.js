const express = require("express");

// 用户处理请求的函数
const profileCtrl = require('../controller/profile')

const router = express.Router();

// 获取个人资料
router.get("/:username", profileCtrl.getProfile);

// 关注用户
router.post("/:username/follow", profileCtrl.followUser);

// 取消关注用户
router.delete("/:username/follow", profileCtrl.unFollowUser);

module.exports = router;
