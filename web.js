const express=require('express');
var router = express.Router();
const path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/www/index.html'));
    //__dirname : It will resolve to your project folder.
});

module.exports = router;