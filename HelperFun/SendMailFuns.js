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
            html:`<h3>Dear ${client},</h3>
            <p>Thank you for being Signup with our website <b>EccentricStore</b>.</p>
            <p> please enter following  <br/> <h3>One Time Password (OTP) : ${data}</h3> 
            <br/> that has been generated  on ${ new Date().getTime}</p> 
            <p>In case you have not did this please ignore this mail</p>`
            
        });

    } 

module.exports={createMailSender,mailSenderFun};