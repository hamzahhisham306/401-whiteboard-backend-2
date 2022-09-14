"use strict";


const express = require('express');
const router =express.Router();

const {Comment} =require('../modules/index');

router.get('/comment', getAllcomment);
router.post('/comment',postComment);
router.put('/comment/:id',updateComment);
router.delete('/comment/:id', deleteComment);

async function getAllcomment(req,res){
    const comments=await Comment.read();
    res.status(200).json(comments);
}

async function postComment(req,res){
    const newComment=req.body;
    const comment=await Comment.create(newComment);
    res.status(201).json(comment);
}
async function updateComment(req,res){
    const id=req.params.id;
    const newData=req.body;
    const update=await Comment.update(id,newData);
    res.status(202).json(update);
}
async function deleteComment(req,res){
    const id=req.params.id;
    const search=await Comment.Delete(id);
    res.status(204).json({
        message:"its deleted"
    });
}







module.exports=router;