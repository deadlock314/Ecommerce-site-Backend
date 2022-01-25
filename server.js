const express = require('express')
const cors =require('cors')
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config();

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use(express.json())


mongoose.connect(process.env.DB_URI).then(
    app.listen(port,(err)=>{
        if(err) console.error(err)
        else
           console.log(`server is up and running on port ${port} and db connected`)
    })
    
).catch(err=>console.error(err));
                    
   
        



const homeRoute =require('./ProductDataRoute/HomePageRoute');
const loginRoute=require('./authRoute/logInRoute');
const signUpRoute=require('./authRoute/signUpRoute');
const logOutRoute=require('./authRoute/logOutRoute');

app.use('/',homeRoute)
app.use('/login', loginRoute)
app.use('/logout', logOutRoute)
app.use('/signup',signUpRoute);