const { OtpModel, PhoneModel } = require('./farm-5-db');
const express=require('express');
var router = express.Router();
var request=require('request-promise');

router.get('/otp/report', async (req, res) => {

  const identity = req.query.farm;
  if (!identity || identity != 'g2') { 
    res.send("");
  };

  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  const filter = {timestamp: timestamp.getTime()};
  const filter_linkedin = {timestamp: timestamp.getTime(), branch_type: 'LinkedIn'};
  const filter_google = {timestamp: timestamp.getTime(), branch_type: 'Google'};
  const filter_facebook = {timestamp: timestamp.getTime(), branch_type: 'Facebook'};
  const filter_line = {timestamp: timestamp.getTime(), branch_type: 'Line'};
  const filter_bigo = {timestamp: timestamp.getTime(), branch_type: 'Bigo'};
  const filter_discord = {timestamp: timestamp.getTime(), branch_type: 'Discord'};
  const filter_grab = {timestamp: timestamp.getTime(), branch_type: 'Grab'};
  const filter_agoda = {timestamp: timestamp.getTime(), branch_type: 'Agoda'};
  const filter_apple = {timestamp: timestamp.getTime(), branch_type: 'Apple'};
  const filter_kucoin = {timestamp: timestamp.getTime(), branch_type: 'KuCoin'};
  const filter_garmin = {timestamp: timestamp.getTime(), branch_type: 'Garmin'};
  const filter_viber = {timestamp: timestamp.getTime(), branch_type: 'Viber'};
  const filter_sociolla = {timestamp: timestamp.getTime(), branch_type: 'Sociolla'};
  const filter_lark = {timestamp: timestamp.getTime(), branch_type: 'Lark'};
  const filter_lazada = {timestamp: timestamp.getTime(), branch_type: 'Lazada'};
  const filter_bulkSMS = {timestamp: timestamp.getTime(), branch_type: 'BulkSMS'};
  

  const lstOtp = await OtpModel.count(filter);
  const count_linkedin_tha = await OtpModel.count(filter_linkedin);
  const count_google_tha = await OtpModel.count(filter_google);
  const count_facebook_tha = await OtpModel.count(filter_facebook);
  const count_line_tha = await OtpModel.count(filter_line);
  const count_bigo_tha = await OtpModel.count(filter_bigo);
  const count_discord_tha = await OtpModel.count(filter_discord);
  const count_grab_tha = await OtpModel.count(filter_grab);
  const count_agoda = await OtpModel.count(filter_agoda);
  const count_apple = await OtpModel.count(filter_apple);
  const count_kucoin = await OtpModel.count(filter_kucoin);
  const count_garmin = await OtpModel.count(filter_garmin);
  const count_viber = await OtpModel.count(filter_viber);
  const count_sociolla = await OtpModel.count(filter_sociolla);
  const count_lark = await OtpModel.count(filter_lark);
  const count_lazada = await OtpModel.count(filter_lazada);
  const count_bulksms = await OtpModel.count(filter_bulkSMS);
  
  var result = "<b id='farm5' total='" + lstOtp + "'>Farm 5: " + lstOtp + "</b></br>";

  result += "<b style='color:blue'>LinkedIn: <span id='linkedin_5'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_5'>" + count_apple + "</span></b></br>";
  result += "<b style='color:green'>Google: <span id='google_5'>" + count_google_tha + "</span></b></br>";
  result += "<b style='color:green'>Facebook: <span id='facebook_5'>" + count_facebook_tha + "</span></b></br>";
  result += "Line: " + count_line_tha + "</br>";
  result += "Bigo: " + count_bigo_tha + "</br>";
  result += "Discord: <span id='discord_5'>" + count_discord_tha + "</span></br>";
  result += "BulkSMS: <span id='bulkSMS_5'>" + count_bulksms + "</span></br>";
  result += "Lazada: <span id='lazada_5'>" + count_lazada + "</span></br>";
  result += "Grab: " + count_grab_tha + "</br>";
  result += "Agoda: " + count_agoda + "</br>";
  result += "Garmin: " + count_garmin + "</br>";
  result += "Sociolla: " + count_sociolla + "</br>";
  result += "Lark: " + count_lark + "</br>";
  result += "Viber: <span id='viber_5'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_5'>" + count_kucoin + "</span></p>";

  res.send(result);
  
});

 
module.exports = router;