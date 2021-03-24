

const nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
    
    service: 'gmail',
    auth: {
           user: 'asathishkumar54@gmail.com',
           pass: 'lezmrrmgryeqfvxr'
       }
   });



   const mailOptions = {
    from: 'asathishkumar54@gmail.com', // sender address
    to: 'asathishkumar54@gmail.com', // list of receivers
    subject: 'lezmrrmgryeqfvxr', // Subject line
    html:`
      <h1>Hello world</h1>
    `,            // plain text body
    
   attachments: [{
       filename: 'course.pdf',
       path: 'C:\\NodeMailer\\udemy 1.pdf'
   }]
}
  


transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

// .then((err,res)=>{
//     if(err){
//         console.log('enter your correct details')
//     }else{
//         console.log(res)
//     }

// })



