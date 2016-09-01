console.log("angular-app.js");
var myApp = angular.module("personalSite",['ngRoute']);



myApp.controller('myController', ['$scope' , '$http' , '$routeParams' , function($scope ,$http, $routeParams){
  

}]);

myApp.controller('playlistController', function($scope ,$http){


});



myApp.config(function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "about/about.html",
      controller : "myController"
    })
    .when("/blog", {
      templateUrl : "blog/blog.html",
      controller : "myController"
    })
    .when("/blog/1", {
      templateUrl : "blog/entry1/index.html",
      controller : "myController"
    })
    .when("/blog/2", {
      templateUrl : "blog/entry2/index.html",
      controller : "myController"
    })    
    .when("/playlists",{
      templateUrl : "angular/views/playlists.html",
      controller : "playlistController"
    })
    .when('/playlists/:id',{
      templateUrl : "angular/views/tracks.html",
      controller : "myController"
    })
})