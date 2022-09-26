'use strict';

const express = require('express');
const router = express.Router();
const ERROR = require('../error-handlers/500');
const bearer = require('../middlewares/bearerAuth');
const { checkDeleteAnyPost,
    checkUpdateAnyPost,
    checkCreateNewPost,
    checkAllPost } = require('../middlewares/acl');


const { getPost,
    createNewPost,
    deletPost,
    selectPost,
    updatePost,
    getPostComment
} = require('./postRoutes');






router.get('/post', bearer,checkAllPost, getPost);
router.get('/postWitheComment', getPostComment);
router.post('/post',bearer,checkCreateNewPost, createNewPost);
router.delete('/post/:id',bearer,checkDeleteAnyPost, deletPost);
router.get('/post/:id', ERROR, selectPost);
router.put('/post/:id',bearer,checkUpdateAnyPost, updatePost)

module.exports = router;