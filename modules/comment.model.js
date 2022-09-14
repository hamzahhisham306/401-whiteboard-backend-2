"use strict";


const Comment=(sequelize, DataTypes)=>sequelize.define("Comment",{
    descrption:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Nationality:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    idComment:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }

});


module.exports=Comment;