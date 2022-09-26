"use strict";

const Comment=(sequelize, DataTypes)=>sequelize.define("usercomms",{
    descrption:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Nationality:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    postID:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    userID:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    


});


module.exports=Comment;