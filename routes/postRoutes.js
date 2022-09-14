"use strict"
const {Post} = require('../modules/index');



async function getPost(req,res){
    const post=await Post.findAll();
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
    const post= await Post.destroy({
        where:{id:id}
    });
    res.status(204).json({post});
    
}

async function selectPost(req,res){
    const id=req.params.id;
    const post=await Post.findOne({
        where:{id:id}
    });
    res.status(200).json(post);
}

async function updatePost(req,res){
    const id =req.params.id;
    const updatePost=req.body;
    const search=await Post.findOne({
        where:{id:id}
    });
    const update= await search.update(updatePost);
    res.status(200).json(update);
}

module.exports={
    getPost,
    createNewPost,
    deletPost,
    selectPost,
    updatePost
}