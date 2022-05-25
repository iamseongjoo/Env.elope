const express = require('express');
const router = express.Router();
const groupController = require('./group.controller');
//로그인 확인

//그룹 게시글 생성
router.post('/group-add', groupController.GroupController);


module.exports = router;