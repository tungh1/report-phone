const { OtpModel11 } = require('./farm-11-group-db');

const { OtpModel10 } = require('./farm-10-group-db');

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
  if (!identity || identity != 'g3') { 
    res.send("0000000000000000000000000");
  };

  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  var result = "---------------------------------";
  try {
    const filter_group = [{ $match: { timestamp: timestamp.getTime() }}, { $group: { _id: { brand_type: '$branch_type' }, count: {$sum: 1} } }, {$sort: { count: -1, _id: 1}}];
    const list_filter_11 = await OtpModel11.aggregate(filter_group);
    const list_filter_10 = await OtpModel10.aggregate(filter_group);

    const total_otp_11 = list_filter_11.map(x => { return x.count }).reduce((a, b) => a + b, 0);

    const total_otp_10 = list_filter_10.map(x => { return x.count }).reduce((a, b) => a + b, 0);

    const list_group_tha = list_filter_11.concat(list_filter_10);

    const list_total_tha = groupBy(list_group_tha, x => x._id.brand_type);

    result = current_date + " <span style='font-size:8px;'>" + timestamp.getTime() + "</span><h3>Total: "+ (total_otp_11 + total_otp_10) +"</h3>";
       
    result += "</br></br><b style='color:blue'>Farm 10: "+ total_otp_10 +"</b></br>";
    list_filter_10.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:blue'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });

    result += "</br></br><b style='color:blue'>Farm 11: "+ total_otp_11 +"</b></br>";

    list_filter_11.forEach(item => {
      result += "<span style='margin-right: 10px;'><b style='color:blue'>"+ item._id.brand_type +"</b>: " + item.count + "</span>";
    });

  } catch (ex) {
      result = JSON.stringify(ex);
  }

  res.send(result);
  
});
 
module.exports = router;