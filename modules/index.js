"use strict";


const { Sequelize, DataTypes } = require('sequelize');

const Post = require('./post.model');
const Comment=require('./comment.model');
const User =require('./user.model');
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
const UserModal=User(sequelize, DataTypes);


sequelize.authenticate().then(() => {
  console.log('Database connected to postgres');
}).catch((err) => {
  console.log(err)
});


UserModal.hasMany(postModel,{foreignKey:'ownerID', sourceKey:'id'});
postModel.belongsTo(UserModal,{foreignKey:'ownerID',sourceKey:'id'});


UserModal.hasMany(commentModal,{foreignKey:'userID', sourceKey:'id'});
commentModal.belongsTo(UserModal,{foreignKey:'userID', targetKey:'id'});

postModel.hasMany(commentModal,{foreignKey:'postID', sourceKey:'id'});
commentModal.belongsTo(postModel,{foreignKey:'postID', targetKey:'id'});



const postCollection=new collenction(postModel);
const commentCollection=new collenction(commentModal);

module.exports = {
  db: sequelize,
  Post:postCollection,
  Comment:commentCollection,
  commentModal:commentModal,
  UserModal:UserModal,
  postModel:postModel
}