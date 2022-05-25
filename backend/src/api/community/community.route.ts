// const express = require('express');
import express from 'express';

const router = express.Router();
const CommunityController = require('./community.controller');

router.post('/community', CommunityController.createCommunityBoard);



module.exports = router;