const express = require('express');
const router = express.Router();
const bodyPares = require('body-parser');

router.use(bodyPares.urlencoded({
	extended:false
}))

router.get('/:name?',(req,res)=>{
	if(req.params.name){
		res.send(req.params.name)
	}else{
		res.send('user')
	}
	// res.send('你好，我是user的主页')
})

router.post('/',(req,res)=>{
	res.send({name:'axl',age:24})
})

module.exports=router;