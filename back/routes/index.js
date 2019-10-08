var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

const sqlite = require('sqlite3');

const db = new sqlite.Database('./db/database.db', (err)=>{
  if(err){
    console.log(err.message);
  }
  else{
    console.log("database connected");
  }
});

// get in touch form table created

// db.run("CREATE TABLE get_in_touch (full_name text, email text, mobile text, subject text, message text, time text)", (err)=>{
//   if(err){
//     console.log(err.message);
//   }
//   else{
//     console.log("Get in touch table created");
//   }
// });

/* GET home page. */

router.post('/', (req, res, next) =>{
      console.log(req.body);
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
          user: 'jangidvishal1999@gmail.com',
          pass: 'vishal@1729'
        }
      });
    
      var mailOptions = {
        from: 'jangidvishal1999@gmail.com',
        to: ['jangidvishal1999@gmail.com', 'brodude1729@gmail.com'],
        subject: req.body.subject,
        text: `Mail from: ${req.body.email}\nMobile: ${req.body.mobile}\nName: ${req.body.full_name} \n${req.body.message}`
      };
      var mailoption2 = {
        from: 'jangidvishal1999@gmail.com',
        to: req.body.email,
        subject: 'no reply',
        text: 'Thanks for contact with abc.'
      }
      transporter.sendMail(mailoption2, (error, info) =>{
        if(error){
          console.log(error);
        }
        else{
          console.log("Email sent: " + info.response);
        }
      });
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  // Data stored in database for get in touch inforamtion
  db.run("INSERT INTO get_in_touch(full_name, email, mobile, subject, message, time) VALUES(?, ?, ?, ?,?, ?)",
    [req.body.full_name, req.body.email, req.body.mobile, req.body.subject, req.body.message, Date()], (err) => {
      if (err) {
        console.log(err.message);
      }
      else {
        console.log("data saved in database for contact info");
      }
    });
      
    
        res.status(200).send();
});

module.exports = router;
