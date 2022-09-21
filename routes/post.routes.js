'use strict';

const express = require('express');
const router = express.Router();
const ERROR=require('../error-handlers/500');
const bearer=require('../middlewares/bearerAuth');

const { getPost,
    createNewPost,
    deletPost,
    selectPost,
    updatePost,
    getPostComment
} = require('./postRoutes');






router.get('/post',bearer,getPost);
router.get('/postWitheComment',getPostComment);
router.post('/post',createNewPost);
router.delete('/post/:id', deletPost);
router.get('/post/:id',ERROR,selectPost);
router.put('/post/:id', updatePost)

module.exports = router;