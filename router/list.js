let express = require('express');
let router = express.Router();
let bodyParse = require('body-parser');
let fly=require("flyio");

router.get('/',(req,res)=>{
    let start = req.query.start?req.query.start:0;
    let count = req.query.count?req.query.count:5;
    fly.get('https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',{start,count}).then((response)=>{
        res.json(response)
    })
})

module.exports=router;