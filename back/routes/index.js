var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var home = {
  name: 'vishal', 
  age: 32, 
  address: "svnit"
}
mongoose.connect('mongodb+srv://vishal:vishal%401729@cluster0-9qzf0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

var small = new Tank({ size: 'small' });

small.save(function (err) {
  if (err) return handleError(err);
  // saved!
  console.log("data saved");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(home)
  next();

});
router.post('/', (req, res, next) =>{
    console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
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
  

    res.status(200).send();
});

module.exports = router;
