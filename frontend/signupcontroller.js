myapp.controller('signupctrl',function($scope,$state,$http){
	
$scope.signup=function(){
$http({

url:'/signup',
method:'POST',
params: {

	name:$scope.name,
	pass:$scope.pass,
	phone_no:$scope.phone_no,
    date_of_birth:$scope.date_of_birth,                                                                                                   
    gender:$scope.gender
}

}).then(function(response){

	console.log(">>>>response",response);
})





}

});