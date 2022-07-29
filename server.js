const express = require('express')
const cors =require('cors')
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const app = express();
require('dotenv').config();

  const whitelist = ['https://eccentricstore.netlify.app','http://localhost:3000','http://192.168.43.230:19006']

app.use(cors({
    origin:whitelist,
credentials:true
}));

app.use(cookieParser())

app.use(express.json());




mongoose.connect(process.env.DB_URI).then(
    app.listen(process.env.PORT|| 8443 ,(err)=>{
        if(err) console.error(err)
        else
           console.log(`server is up and running on port ${process.env.PORT} or 8443 and db connected`);
           
    })
    
).catch(err=>console.error(err));
                    
   

const homeRoute =require('./ProductDataRoute/productsRoutes');
const proRoute = require('./ProductDataRoute/singleProRoute');
const productSearch = require('./ProductDataRoute/productSearch');
const userDataRoute=require('./UserDataRoute/userDataRoute')
const loginRoute=require('./authRoute/logInRoute');
const signUpRoute=require('./authRoute/signUpRoute');
const logOutRoute=require('./authRoute/logOutRoute');
const AuthOtpRoute=require('./authRoute/AuthOtp');
const credentialsMiddleware = require('./middleware/cookieCredentialsMid');

app.use('/',homeRoute)
app.use('/',proRoute)
app.use('/productsearch',productSearch)
app.use('/login', loginRoute)
app.use('/logout', logOutRoute)
app.use('/signup',signUpRoute);
app.use('/',AuthOtpRoute);
app.use('/',userDataRoute);
