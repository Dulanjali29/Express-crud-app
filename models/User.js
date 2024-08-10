const { Sequelize, DataTypes } = require('sequelize');

const sequelize  =require('../database');

const User=sequelize.define('User',{

    //model attribute are define here
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=User;