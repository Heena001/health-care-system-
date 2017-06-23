var express =require('express');
var myapp =express();


myapp.use(express.static(__dirname+'./../frontend'))


console.log('>>>>>>>>>>>>' , __dirname + './../frontend');

myapp.get('/',function(req,res){

	res.render('index.html');
});

myapp.post('/login',function(req,res){

console.log(">>>>>> reached ")

if(req.query.name=="heena"&& req.query.pass=="1234"){
	res.json({
name:'heena',
phone:'9873241568',
age:21,
des:'student'
	})
}
else{

	res.send("incorrect details");
}
});

myapp.post('/signup',function(req,res){

console.log(">>>>>> reached ")

if(req.query.name=="heena"&& req.query.pass=="1234"){
	res.json({
name:'heena',
phone:'9873241568',
age:21,
des:'student'
	})
}
else{

	res.send("incorrect details");
}
});



myapp.listen(8100,function(){
	console.log('server is running');
});