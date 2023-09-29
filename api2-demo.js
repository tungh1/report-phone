const { OtpModel, PhoneModel } = require('./farm-2-db');
const express=require('express');
var router = express.Router();
var request=require('request-promise');

router.get('/otp/demo', async (req, res) => {
  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  const filter = {timestamp: timestamp.getTime()};
  const filter_google = {timestamp: timestamp.getTime(), branch_type: 'Google'};
  const otp_google = await OtpModel.findOne(filter_google);
  var result = {
    Code: otp_google.otp.match(/\d/g).join(""),
    status_code: res.statusCode,
    success: true,
    message: "successful",
    Phone: otp_google.phone_number
  }
  res.send(result);
  
});

router.get('/otp/demo1abc', async (req, res) => {
    var current_date = new Date().toLocaleDateString();
    var timestamp = new Date(current_date);
    const filter = {timestamp: timestamp.getTime()};
    const filter_google = {timestamp: timestamp.getTime(), branch_type: 'Google'};
    const otp_google = await OtpModel.findOne(filter_google);
    var result = {
      Code: otp_google.otp.match(/\d/g).join(""),
      status_code: res.statusCode,
      success: true,
      message: "successful",
      Phone: otp_google.phone_number
    }
    res.send(result);
    
  });
 
module.exports = router;