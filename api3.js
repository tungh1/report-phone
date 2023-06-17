const { OtpModel, PhoneModel } = require('./farm-3-db');
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
  const filter_lazada = {timestamp: timestamp.getTime(), branch_type: 'Lazada'};
  const filter_bulkSMS = {timestamp: timestamp.getTime(), branch_type: 'BulkSMS'};
  const filter_snapchat = {timestamp: timestamp.getTime(), branch_type: 'SnapChat'};
  const filter_binance = {timestamp: timestamp.getTime(), branch_type: 'Binance'};
  const filter_byteplus = {timestamp: timestamp.getTime(), branch_type: 'BytePlus'};
  const filter_firebase = {timestamp: timestamp.getTime(), branch_type: 'Firebase'};


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
  const count_lazada = await OtpModel.count(filter_lazada);
  const count_bulksms = await OtpModel.count(filter_bulkSMS);
  const count_snapchat = await OtpModel.count(filter_snapchat);
  const count_binance = await OtpModel.count(filter_binance);
  const count_byteplus = await OtpModel.count(filter_byteplus);
  const count_firebase = await OtpModel.count(filter_firebase);
  
  var result = "<p><b>Z305</b></br><b id='farm3' total='" + lstOtp + "'>Farm 3: " + lstOtp + "</b></br>";
  result += "<b style='color:blue'>LinkedIn: <span id='linkedin_3'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_3'>" + count_apple + "</span></b></br>";
  result += "<b style='color:green'>Google: <span id='google_3'>" + count_google_tha + "</span></b></br>";
  result += "<b style='color:green'>Facebook: <span id='facebook_3'>" + count_facebook_tha + "</span></b></br>";
  result += "Line: " + count_line_tha + "</br>";
  result += "Bigo: " + count_bigo_tha + "</br>";
  result += "Discord: <span id='discord_3'>" + count_discord_tha + "</span></br>";
  result += "BulkSMS: <span id='bulkSMS_3'>" + count_bulksms + "</span></br>";
  result += "Lazada: <span id='lazada_3'>" + count_lazada + "</span></br>";
  result += "BytePlus: <span id='byteplus_3'>" + count_byteplus + "</span></br>";
  result += "Binance: <span id='binance_3'>" + count_binance + "</span></br>";
  result += "SnapChat: <span id='snapchat_3'>" + count_snapchat + "</span></br>";
  result += "Firebase: <span id='firebase_3'>" + count_firebase + "</span></br>";
  result += "Grab: " + count_grab_tha + "</br>";
  result += "Agoda: " + count_agoda + "</br>";
  result += "Garmin: " + count_garmin + "</br>";
  result += "Sociolla: " + count_sociolla + "</br>";
  result += "Viber: <span id='viber_3'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_3'>" + count_kucoin + "</span></p>";

  res.send(result);
  
});

 
module.exports = router;