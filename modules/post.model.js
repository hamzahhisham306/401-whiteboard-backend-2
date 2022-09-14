"use strict";


const Post=(sequelize, DataTypes)=>sequelize.define('Post',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
   
});


module.exports=Post;
