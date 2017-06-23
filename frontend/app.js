
 var myapp=angular.module("myapp",['ui.router']);

myapp.config(function($stateProvider){

$stateProvider

 .state('state1',{
url:'/heena',
templateUrl:'login.html',
controller:'loginctrl'

 })

 .state('state2',{

url:'/heena2',
templateUrl:'signup.html',
controller:'signupctrl'
 })



 })




