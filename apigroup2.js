const { OtpModel2 } = require('./farm-2-group-db');
const { OtpModel4 } = require('./farm-4-group-db');
const { OtpModel9 } = require('./farm-9-group-db');

const { OtpModel3 } = require('./farm-3-group-db');
const { OtpModel5 } = require('./farm-5-group-db');

const express=require('express');
var router = express.Router();


function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

router.get('/report', async (req, res) => {
  const identity = req.query.farm;
  if (!identity || identity != 'g2') { 
    res.send("");
  };

  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  var result = "";
  try {
    const filter_group = [{ $match: { timestamp: timestamp.getTime() }}, { $group: { _id: { brand_type: '$branch_type' }, count: {$sum: 1} } }, {$sort: { count: -1, _id: 1}}];
    const list_filter_2 = await OtpModel2.aggregate(filter_group);
    const list_filter_4 = await OtpModel4.aggregate(filter_group);
    const list_filter_9 = await OtpModel9.aggregate(filter_group);

    const list_filter_3 = await OtpModel3.aggregate(filter_group);
    const list_filter_5 = await OtpModel5.aggregate(filter_group);

    const total_otp_2 = list_filter_2.map(x => { return x.count }).reduce((a, b) => a + b, 0);
    const total_otp_4 = list_filter_4.map(x => { return x.count }).reduce((a, b) => a + b, 0);
    const total_otp_9 = list_filter_9.map(x => { return x.count }).reduce((a, b) => a + b, 0);

    const total_otp_3 = list_filter_3.map(x => { return x.count }).reduce((a, b) => a + b, 0);
    const total_otp_5 = list_filter_5.map(x => { return x.count }).reduce((a, b) => a + b, 0);

    const list_group_tha = list_filter_2.concat(list_filter_4).concat(list_filter_9);
    const list_group_son = list_filter_3.concat(list_filter_5);

    const list_total_tha = groupBy(list_group_tha, x => x._id.brand_type);
    const list_total_son = groupBy(list_group_son, x => x._id.brand_type);

    result = current_date + " <span style='font-size:8px;'>" + timestamp.getTime() + "</span><h3>Total: "+ (total_otp_2 + total_otp_3 + total_otp_4 + total_otp_5 + total_otp_9) +"</h3>";
    
    result += "<table><tr><td style='color:green; font-size:20px;font-weight: bold'>Z305</br><a style='color:red'>"+ (total_otp_3 + total_otp_5) +"</a></td>";
    list_total_son.forEach(item => {
        result += "<td style='padding-left: 5px'><a style='color:green; font-size:20px;font-weight: bold'>"+ item[0]._id.brand_type +"</a></br>" + item.map(x => {return x.count}).reduce((a, b) => a + b, 0) + "</td>";
    });

    result +="</tr>";

    result += "<tr><td style='color:blue; font-size:20px;font-weight: bold;'>X204</br><a style='color:red'>"+ (total_otp_2 + total_otp_4 + total_otp_9) +"</a></td>";
    list_total_tha.forEach(item => {
      if(item.map(x => {return x.count}).reduce((a, b) => a + b, 0) > 1000 || item[0]._id.brand_type == 'Google' || item[0]._id.brand_type == 'Discord') {
        result += "<td style='padding-left: 5px'><a style='color:blue;font-size:20px; font-weight:bold'>"+ item[0]._id.brand_type +"</a></br>" + item.map(x => {return x.count}).reduce((a, b) => a + b, 0) + "</td>";
      }
    });

    result +="</tr></table>";
    
    result += "</br></br><b style='color:blue'>Farm 2: "+ total_otp_2 +"</b></br>";
    list_filter_2.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:blue'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });

    result += "</br></br><b style='color:blue'>Farm 4: "+ total_otp_4 +"</b></br>";

    list_filter_4.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:blue'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });

    result += "</br></br><b style='color:blue'>Farm 9: "+ total_otp_9 +"</b></br>";

    list_filter_9.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:blue'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });



    result += "</br></br><b style='color:green'>Farm 3: "+ total_otp_3 +"</b></br>";
    list_filter_3.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:green'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });

    result += "</br></br><b style='color:green'>Farm 5: "+ total_otp_5 +"</b></br>";
    list_filter_5.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:green'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });
  } catch (ex) {
      result = JSON.stringify(ex);
  }

  res.send(result);
  
});
 
module.exports = router;