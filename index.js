const express=require('express');
const User=require('./models/User');
const sequelize=require('./database');

const app=express();
const port=3000;

app.listen(port,()=>{
console.log(`server is running on port ${port}`);

});

app.use(express.json());

sequelize.sync({force:false}).then(()=>{
 console.log('All models were syncronized successfully');
    
}).catch(error=>{
    console.log('Error occurd during model syncronizeation :',error);
})

