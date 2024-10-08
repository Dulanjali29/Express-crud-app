const express=require('express');
const User=require('./models/User');
const sequelize=require('./database');

const app=express();
const port=3000;

app.listen(port,()=>{
console.log(`server is running on port ${port}`);

});

app.use(express.json());

//Syncing all models
sequelize.sync({force:false}).then(()=>{
 console.log('All models were syncronized successfully');
    
}).catch(error=>{
    console.log('Error occurd during model syncronizeation :',error);
})

//  add user
app.post('/users',async(req,res)=>{
    const {name,email}=req.body;
    const newUser=await User.create({name,email});
    res.json(newUser);
});

//   get all users
app.get('/users',async(req,res)=>{
    const users=await User.findAll();
    res.json(users);
});

//   update user by id
app.put('/users/:id',async(req,res)=>{
    const {name,email}=req.body;
    const user=await User.findByPk(req.params.id);
    if(user){
        user.name=name;
        user.email=email;
        await user.save();
        res.json(user);
    }else{
        res.status(404).send('User not dound !');
    }
   
});
//  delete user by id
app.delete('/users/:id',async(req,res)=>{
    const user=await User.findByPk(req.params.id);
     if(user){
        await user.destroy();
        res.status(204).send('User Deleted Successfully');
     }else{
        res.status(404).send('User not found !');
     }
    });