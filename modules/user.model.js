
const User=(sequleize, DataTypes)=>sequleize.define("User",{
 
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
    }
});

module.exports=User