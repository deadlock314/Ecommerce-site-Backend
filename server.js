const express = require('express')
const cors =require('cors')
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(cors({
    origin:'*',
    credentials:true
}));

app.use(express.json())


mongoose.connect(process.env.DB_URI).then(
    app.listen(process.env.PORT|| 8443 ,(err)=>{
        if(err) console.error(err)
        else
           console.log(`server is up and running on port ${process.env.PORT} or 8443 and db connected`)
    })
    
).catch(err=>console.error(err));
                    
   

const homeRoute =require('./ProductDataRoute/HomePageRoute');
const proRoute = require('./ProductDataRoute/singleProRoute');
const loginRoute=require('./authRoute/logInRoute');
const signUpRoute=require('./authRoute/signUpRoute');
const logOutRoute=require('./authRoute/logOutRoute');

app.use('/',homeRoute)
app.use('/',proRoute)
app.use('/login', loginRoute)
app.use('/logout', logOutRoute)
app.use('/signup',signUpRoute);