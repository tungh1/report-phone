const { OtpModel, PhoneModel } = require('./farm-4-db');
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
  const filter_okx = {timestamp: timestamp.getTime(), branch_type: 'OKX'};
  const filter_bigo = {timestamp: timestamp.getTime(), branch_type: 'Bigo'};
  const filter_discord = {timestamp: timestamp.getTime(), branch_type: 'Discord'};
  const filter_agoda = {timestamp: timestamp.getTime(), branch_type: 'Agoda'};
  const filter_apple = {timestamp: timestamp.getTime(), branch_type: 'Apple'};
  const filter_kucoin = {timestamp: timestamp.getTime(), branch_type: 'KuCoin'};
  const filter_huawei = {timestamp: timestamp.getTime(), branch_type: 'Huawei'};
  const filter_garmin = {timestamp: timestamp.getTime(), branch_type: 'Garmin'};
  const filter_viber = {timestamp: timestamp.getTime(), branch_type: 'Viber'};
  const filter_snapchat = {timestamp: timestamp.getTime(), branch_type: 'SnapChat'};
  const filter_lark = {timestamp: timestamp.getTime(), branch_type: 'Lark'};
  const filter_traveloka = {timestamp: timestamp.getTime(), branch_type: 'Traveloka'};
  const filter_bulkSMS = {timestamp: timestamp.getTime(), branch_type: 'BulkSMS'};
  const filter_garena = {timestamp: timestamp.getTime(), branch_type: 'Garena'};
  const filter_kakaotalk = {timestamp: timestamp.getTime(), branch_type: 'KakaoTalk'};
  const filter_binance = {timestamp: timestamp.getTime(), branch_type: 'Binance'};
  const filter_byteplus = {timestamp: timestamp.getTime(), branch_type: 'BytePlus'};
  const filter_firebase = {timestamp: timestamp.getTime(), branch_type: 'Firebase'};
  const filter_yandex = {timestamp: timestamp.getTime(), branch_type: 'Yandex'};
  const count_yandex = await OtpModel.count(filter_yandex);


  const lstOtp = await OtpModel.count(filter);
  const count_linkedin_tha = await OtpModel.count(filter_linkedin);
  const count_google_tha = await OtpModel.count(filter_google);
  const count_facebook_tha = await OtpModel.count(filter_facebook);
  const count_okx_tha = await OtpModel.count(filter_okx);
  const count_bigo_tha = await OtpModel.count(filter_bigo);
  const count_discord_tha = await OtpModel.count(filter_discord);
  const count_agoda = await OtpModel.count(filter_agoda);
  const count_apple = await OtpModel.count(filter_apple);
  const count_kucoin = await OtpModel.count(filter_kucoin);
  const count_huawei = await OtpModel.count(filter_huawei);
  const count_garmin = await OtpModel.count(filter_garmin);
  const count_viber = await OtpModel.count(filter_viber);
  const count_snapchat = await OtpModel.count(filter_snapchat);
  const count_lark = await OtpModel.count(filter_lark);
  const count_traveloka = await OtpModel.count(filter_traveloka);
  const count_bulksms = await OtpModel.count(filter_bulkSMS);
  const count_garena = await OtpModel.count(filter_garena);
  const count_kakaotalk = await OtpModel.count(filter_kakaotalk);
  const count_binance = await OtpModel.count(filter_binance);
  const count_byteplus = await OtpModel.count(filter_byteplus);
  const count_firebase = await OtpModel.count(filter_firebase);
  
  var result = "<b id='farm4' total='" + lstOtp + "'>Farm 4: " + lstOtp + "</b></br>";

  result += "<b style='color:blue'>LinkedIn: <span id='linkedin_4'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_4'>" + count_apple + "</span></b></br>";
  result += "<b style='color:green'>Google: <span id='google_4'>" + count_google_tha + "</span></b></br>";
  result += "<b style='color:green'>Facebook: <span id='facebook_4'>" + count_facebook_tha + "</span></b></br>";
  result += "Okx: <span id='okx_4'>" + count_okx_tha + "</span></br>";
  result += "Yandex: <span id='yandex_4'>" + count_yandex + "</span></br>";

  result += "Bigo: " + count_bigo_tha + "</br>";
  result += "Discord: <span id='discord_4'>" + count_discord_tha + "</span></br>";
  result += "BytePlus: <span id='byteplus_4'>" + count_byteplus + "</span></br>";
  result += "Binance: <span id='binance_4'>" + count_binance + "</span></br>";
  result += "SnapChat: <span id='snapchat_4'>" + count_snapchat + "</span></br>";
  result += "Firebase: <span id='firebase_4'>" + count_firebase + "</span></br>";
  result += "Lark: " + count_lark + "</br>";
  result += "Traveloka: " + count_traveloka + "</br>";
  result += "BulkSMS: <span id='bulkSMS_4'>" + count_bulksms + "</span></br>";
  result += "Garena: " + count_garena + "</br>";
  result += "KakaoTalk: " + count_kakaotalk + "</br>";
  result += "Agoda: " + count_agoda + "</br>";
  result += "Garmin: " + count_garmin + "</br>";
  result += "Viber: <span id='viber_4'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_4'>" + count_kucoin + "</span></br>";
  result += "Huawei: " + count_huawei + "</p>";

  res.send(result);
  
});

 
module.exports = router;