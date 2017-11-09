const express = require('express');
const app = express();
const user = require('./router/user');
const list = require('./router/list');

app.all('*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
})

app.use('/list',list)
app.use('/user',user)

app.listen(300)