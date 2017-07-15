var express=require("express")
var myapp=express();
var mongoClient= require("mongodb").MongoClient;



myapp.use(express.static(__dirname+'./../frontend'))


console.log('>>' , __dirname + '');


myapp.get('/',function(req,res){

	res.render('index.html');
});



myapp.post('/createuser',function(req,res){

mongoClient.connect('mongodb://heena:test%40123@ds153352.mlab.com:53352/healthcare',function(err,db){

	db.collection('users').insert({username:req.query.name,password :req.query.pass,phone_no:req.query.phone_no,
		email:req.query.email,gender:req.query.gender},function(err,result){

			if(err){
				return res.send(err)
			}
			else
				res.send(result);

    


	console.log(">>>>>>reached")
})
})
});



myapp.get('/login',function(req,res){

console.log("hiis is the query" , req.query.name);
console.log("hiis is the query" , req.query.pass);



mongoClient.connect('mongodb://heena:test%40123@ds153352.mlab.com:53352/healthcare',function(err,db){


db.collection('users').findOne({username:req.query.name},function(err,result){

if(err){

console.log("cannot find");
}



if (result==null){

console.log("user doesn't exist");

}
else
{
if(result.password==req.query.pass){

console.log("user data",result);
res.send(result);



}
else{

console.log("password doesn't match");

}
	console.log("data",result);
	res.send(result);
}

});

})


console.log(">>>>>> reached ")
});



myapp.listen(8100,function(){

	console.log('server is running');
});

