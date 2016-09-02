console.log("angular-app.js");
var myApp = angular.module("personalSite",['ngRoute']);



myApp.controller('myController', ['$scope' , '$http' , '$routeParams' , function($scope ,$http, $routeParams){
  

}]);


myApp.config(function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "javascript/about/about.html",
      controller : "myController"
    })
    .when("/blog", {
      templateUrl : "javascript/blog/blog.html",
      controller : "myController"
    })
    .when("/blog/1", {
      templateUrl : "javascript/blog/entry1/index.html",
      controller : "myController"
    })
    .when("/blog/2", {
      templateUrl : "javascript/blog/entry2/index.html",
      controller : "myController"
    })
    .when("/blog/3", {
      templateUrl : "javascript/blog/entry3/index.html",
      controller : "myController"
    })
    .when("/blog/4", {
      templateUrl : "javascript/blog/entry4/index.html",
      controller : "myController"
    })        
    .when("/playlists",{
      templateUrl : "javascript/angular/views/playlists.html",
      controller : "playlistController"
    })
    .when('/playlists/:id',{
      templateUrl : "javascript/angular/views/tracks.html",
      controller : "myController"
    })
})