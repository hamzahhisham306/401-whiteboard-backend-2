"use strict";
/* istanbul ignore next */
const {UserModal,postModel} =require('../modules/index');

const checkAllPost=async(req,res,next)=>{
    console.log("CAP>>>>>>>>>>>>>>>>>>>>",req.user.capabilities)

    try{
        if(req.user.capabilities.includes('read')){
            next();
        }
        else{
            res.status(409).send("Not authorized get Allposts");
        }
    }
    catch(e){
        console.log(e);
    }
}
/* istanbul ignore next */
const checkCreateNewPost=(req,res,next)=>{

    try{
        if(req.user.capabilities.includes('create')){
            next()
        }
        else{
            res.status(409).send('Not authorized to make new post');
        }
    }
    catch(e){
        console.log(e);
    }
}
/* istanbul ignore next */
const checkUpdateAnyPost=async(req,res,next)=>{
    console.log('user. owener>>>>>>>',req.user.id, req.body.ownerID)
    try{
        if(req.user.capabilities.includes('update')||req.user.id==req.body.ownerID){
            next()
        }
        else{
            res.status(409).send('Not authorized to update post');
        }
    }
    catch(e){
        console.log(e);
    }
}
/* istanbul ignore next */
const checkDeleteAnyPost=async(req,res,next)=>{
    console.log(req)
    const id=req.params.id;
    const post= await postModel.findOne({where:{id:id}});

    try{            
        if(req.user.capabilities.includes('delete')||req.user.id===post.ownerID){
            next();
        }
        else{

            res.status(409).send('Not authorized to delete post');        }
    }
    catch(e){
        console.log(e);
    }
}

module.exports={
    checkUpdateAnyPost,
    checkCreateNewPost,
    checkAllPost,
    checkDeleteAnyPost
    
}