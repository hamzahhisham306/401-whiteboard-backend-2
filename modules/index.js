"use strict";


const { Sequelize, DataTypes } = require('sequelize');

const Post = require('./post.model');
const Comment=require('./comment.model');
const collenction=require('../collections/user-comment-routes');





require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL;

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}


let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);
const postModel=Post(sequelize, DataTypes);
const commentModal=Comment(sequelize, DataTypes);

postModel.hasMany(commentModal,{foreignKey:'idComment', sourceKey:'id'});
commentModal.belongsTo(postModel,{foreignKey:'idComment', targetKey:'id'});
const postCollection=new collenction(postModel);
const commentCollection=new collenction(commentModal);

module.exports = {
  db: sequelize,
  Post:postCollection,
  Comment:commentCollection,
  commentModal:commentModal

}