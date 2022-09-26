"use strict";
/* istanbul ignore next */
const checkAllPost=async(req,res,next)=>{
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
    console.log("CAP>>>>>>>>>>>>>>>>>>>>",req.user.capabilities)

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
    try{
        if(req.user.capabilities.includes('update')){
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
    console.log("CAP>>>>>>>>>>>>>>>>>>>>",req.user.capabilities)
    try{            
        if(req.user.capabilities.includes('delete')){
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
    checkDeleteAnyPost,
    checkUpdateAnyPost,
    checkCreateNewPost,
    checkAllPost,
}