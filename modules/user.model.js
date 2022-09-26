'use strict';
const jwt= require('jsonwebtoken');

/* istanbul ignore next */
module.exports=(sequleize, DataTypes)=>{
 const User=sequleize.define("UsersModales",{
    username:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        unique: true,
        isEmail: true,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
    token:{
        type:DataTypes.VIRTUAL,
        get:function(){
            return jwt.sign({
                username:this.username
            },process.env.JWT_SECRET)
        },
        set(token){
            return jwt.sign(token, process.env.JWT_SECRET);
        },
    },
    userRole: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
      },
      capabilities: {
        type: DataTypes.VIRTUAL,
        get: function() {
          const acl = {
            admin: ['read', 'create', 'delete', 'update'],
            user: ['read', 'create']
          }
          return acl[this.userRole]
        }
      }
    });

User.authenticateToken=token=>{
    return jwt.verify(token, process.env.JWT_SECRET,(error, decoded)=>{
        if(error)return error;
        else return decoded;
    });
    
}
return User;
}
