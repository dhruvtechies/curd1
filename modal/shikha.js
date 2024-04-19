const {DataTypes}=require("sequelize");

const sequelize = require('../config/mysql');


const User =sequelize.define('UserName',{
    userName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    Password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});
module.exports=User;