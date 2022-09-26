"use strict";


const Post = (sequelize, DataTypes) => sequelize.define('namesURLs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ownerID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
});


module.exports = Post;
