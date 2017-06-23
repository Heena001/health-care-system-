myapp.controller('loginctrl',function($scope,$state,$http){
	
$scope.login=function(){
$http({

url:'/login',
method:'POST',
params: {

	name:$scope.name,
	pass:$scope.pass
}

}).then(function(response){

	console.log(">>>>response",response);
})





}

});