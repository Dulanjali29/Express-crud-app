const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('crud_app','root','1234',{
host:'localhost',
dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Connection established successfully');
    
})
.catch(err=>{
    console.log('Unable to connect to the database:',err);
});

module.exports=sequelize;