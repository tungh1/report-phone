const express=require('express');
var router = express.Router();
const path = require('path');

router.get('/js',function(req,res){
    res.sendFile(path.join(__dirname+'/www/js/index.js'));
    //__dirname : It will resolve to your project folder.
});
router.get('/js1011',function(req,res){
    res.sendFile(path.join(__dirname+'/www/js/index1011.js'));
    //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
    const identity = req.query.farm;
    if (identity && identity == 'g2') {
        res.sendFile(path.join(__dirname+'/www/index.html'));
        //__dirname : It will resolve to your project folder.
    } else {
        res.send("");
    }
    
});

router.get('/1011',function(req,res){
    const identity = req.query.farm;
    if (identity && identity == 'g3') {
        res.sendFile(path.join(__dirname+'/www/index1011.html'));
        //__dirname : It will resolve to your project folder.
    } else {
        res.send("");
    }
    
});


module.exports = router;