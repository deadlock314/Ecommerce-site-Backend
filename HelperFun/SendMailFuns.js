const nodemailer=require('nodemailer');

  
  const createMailSender=async()=>{
      return transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    });
  }
    
    const mailSenderFun=async(client,sub,data)=>{
        return await transporter.sendMail({
            from:'<help.eccentricstore@gmail.com>',
            to:client,
            subject:sub,
            html:`<h3>Dear ${data.name},</h3>
            <p>Thank you for Signing up in website <b>EccentricStore</b>. </p>
            <p> please enter following  </p>
             <h3>One Time Password (OTP) : ${data.otp}</h3> 
            <p> That will expire soon so hurry up.. </p> 
            <p>In case you have not did this please ignore this mail</p> `
            
        });

    } 

module.exports={createMailSender,mailSenderFun};