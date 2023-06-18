const { OtpModel, PhoneModel } = require('./farm-2-db');
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
  const filter_grab = {timestamp: timestamp.getTime(), branch_type: 'Grab'};
  const filter_agoda = {timestamp: timestamp.getTime(), branch_type: 'Agoda'};
  const filter_apple = {timestamp: timestamp.getTime(), branch_type: 'Apple'};
  const filter_kucoin = {timestamp: timestamp.getTime(), branch_type: 'KuCoin'};
  const filter_huawei = {timestamp: timestamp.getTime(), branch_type: 'Huawei'};
  const filter_garmin = {timestamp: timestamp.getTime(), branch_type: 'Garmin'};
  const filter_viber = {timestamp: timestamp.getTime(), branch_type: 'Viber'};
  const filter_lazada = {timestamp: timestamp.getTime(), branch_type: 'Lazada'};
  const filter_sociolla = {timestamp: timestamp.getTime(), branch_type: 'Sociolla'};
  const filter_snapchat = {timestamp: timestamp.getTime(), branch_type: 'SnapChat'};
  const filter_tiktok = {timestamp: timestamp.getTime(), branch_type: 'TikTok'};
  const filter_lark = {timestamp: timestamp.getTime(), branch_type: 'Lark'};
  const filter_gojek = {timestamp: timestamp.getTime(), branch_type: 'Gojek'};
  const filter_traveloka = {timestamp: timestamp.getTime(), branch_type: 'Traveloka'};
  const filter_bulkSMS = {timestamp: timestamp.getTime(), branch_type: 'BulkSMS'};
  const filter_garena = {timestamp: timestamp.getTime(), branch_type: 'Garena'};
  const filter_kakaotalk = {timestamp: timestamp.getTime(), branch_type: 'KakaoTalk'};
  const filter_binance = {timestamp: timestamp.getTime(), branch_type: 'Binance'};
  const filter_byteplus = {timestamp: timestamp.getTime(), branch_type: 'BytePlus'};
  const filter_firebase = {timestamp: timestamp.getTime(), branch_type: 'Firebase'};
  

  

  // const lstPhoneHieu = (await PhoneModel.find({owner: 'HIE'})).map(item => item.phone_number);
  // const lstPhoneThang = (await PhoneModel.find({owner: 'HAI'})).map(item => item.phone_number);

  //const data = await OtpModel.aggregate().sortByCount("branch_type");
  const lstOtp = await OtpModel.count(filter);
  const count_linkedin_tha = await OtpModel.count(filter_linkedin);
  const count_google_tha = await OtpModel.count(filter_google);
  const count_facebook_tha = await OtpModel.count(filter_facebook);
  const count_okx_tha = await OtpModel.count(filter_okx);
  const count_bigo_tha = await OtpModel.count(filter_bigo);
  const count_discord_tha = await OtpModel.count(filter_discord);
  const count_grab_tha = await OtpModel.count(filter_grab);
  const count_agoda = await OtpModel.count(filter_agoda);
  const count_apple = await OtpModel.count(filter_apple);
  const count_kucoin = await OtpModel.count(filter_kucoin);
  const count_huawei = await OtpModel.count(filter_huawei);
  const count_garmin = await OtpModel.count(filter_garmin);
  const count_viber = await OtpModel.count(filter_viber);
  const count_lazada = await OtpModel.count(filter_lazada);
  const count_sociolla = await OtpModel.count(filter_sociolla);
  const count_snapchat = await OtpModel.count(filter_snapchat);
  const count_tiktok = await OtpModel.count(filter_tiktok);
  const count_lark = await OtpModel.count(filter_lark);
  const count_gojek = await OtpModel.count(filter_gojek);
  const count_traveloka = await OtpModel.count(filter_traveloka);
  const count_bulksms = await OtpModel.count(filter_bulkSMS);
  const count_garena = await OtpModel.count(filter_garena);
  const count_kakaotalk = await OtpModel.count(filter_kakaotalk);
  const count_binance = await OtpModel.count(filter_binance);
  const count_byteplus = await OtpModel.count(filter_byteplus);
  const count_firebase = await OtpModel.count(filter_firebase);

  
  var result = "<p id='farm2' total='" + lstOtp + "'><b>X204</b></br><b>Farm 2: "+ lstOtp +"</b>(" + current_date + "-" + timestamp.getTime() + ")</br>";
  result += "<b style='color:blue'>LinkedIn: <span id='linkedin_2'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_2'>" + count_apple + "</span></b></br>";
  result += "<b style='color:green'>Google: <span id='google_2'>" + count_google_tha + "</span></b></br>";
  result += "<b style='color:green'>Facebook: <span id='facebook_2'>" + count_facebook_tha + "</span></b></br>";
  result += "Okx: <span id='okx_2'>" + count_okx_tha + "</span></br>";
  result += "Bigo: " + count_bigo_tha + "</br>";
  result += "Discord: <span id='discord_2'>" + count_discord_tha + "</span></br>";
  result += "Lazada: <span id='lazada_2'>" + count_lazada + "</span></br>";
  result += "BytePlus: <span id='byteplus_2'>" + count_byteplus + "</span></br>";
  result += "Binance: <span id='binance_2'>" + count_binance + "</span></br>";
  result += "Sociolla: " + count_sociolla + "</br>";
  result += "SnapChat: <span id='snapchat_2'>" + count_snapchat + "</span></br>";
  result += "Firebase: <span id='firebase_2'>" + count_firebase + "</span></br>";
  result += "Tiktok: " + count_tiktok + "</br>";
  result += "Lark: " + count_lark + "</br>";
  result += "Gojek: " + count_gojek + "</br>";
  result += "Traveloka: " + count_traveloka + "</br>";
  result += "BulkSMS: <span id='bulkSMS_2'>" + count_bulksms + "</span></br>";
  result += "Garena: " + count_garena + "</br>";
  result += "KakaoTalk: " + count_kakaotalk + "</br>";
  result += "Grab: " + count_grab_tha + "</br>";
  result += "Agoda: " + count_agoda + "</br>";
  result += "Garmin: " + count_garmin + "</br>";
  result += "Viber: <span id='viber_2'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_2'>" + count_kucoin + "</span></br>";
  result += "Huawei: " + count_huawei + "</p>";

  res.send(result);
  
});
 
module.exports = router;