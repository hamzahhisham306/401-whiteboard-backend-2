"use strict"
const {Post,Comment,commentModal} = require('../modules/index');


/* istanbul ignore next */
async function getPost(req,res){
    const post=await Post.read();
    res.status(200).json({
        post
    })
}

async function createNewPost(req,res){
    const post=req.body;
    const newPost=await Post.create(post);
    res.status(201).json(newPost);
}


async function deletPost(req,res){
    const id=req.params.id;
    const post= await Post.Delete(id);
    res.status(204).json({post});
    
}
/* istanbul ignore next */
async function selectPost(req,res){
    const id=req.params.id;
    const post=await Post.read(id)
    res.status(200).json(post);
}

async function updatePost(req,res){
    const id =req.params.id;
    const updatePost=req.body;
    const update= await Post.update(id, updatePost);
    res.status(200).json(update);
}
async function getPostComment(req,res){
    const commentP=await Post.readWithPost(commentModal);
    res.status(200).json(commentP);
}
module.exports={
    getPost,
    createNewPost,
    deletPost,
    selectPost,
    updatePost,
    getPostComment
}