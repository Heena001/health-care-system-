myapp.controller('signupctrl',function($scope,$state,$http){
	
$scope.signup=function(){
$http({

url:'/signup',
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