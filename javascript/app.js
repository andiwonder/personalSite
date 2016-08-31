console.log("angular-app.js");
var myApp = angular.module("personalSite",['ngRoute']);

myApp.filter('formatText', function() {
  return function(text) {
    var indices = [];
    for(var i=0; i<text.length;i++) {
      if (text[i] === "." && i%5 == 0) {
        indices.push(i);
      }
    }
    
    if(indices.length > 2){
      text = text.split('');
      for (var i=0; i<indices.length; i++){
        text[indices[i]] = '\n';
      }
      text = text.join('');
    }
    return text;
  };
});


myApp.controller('myController', ['$scope' , '$http' , '$routeParams' , 'formatTextFilter' , function($scope ,$http, $routeParams){
  

}]);

myApp.controller('playlistController', function($scope ,$http){


});



myApp.config(function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "angular/views/home2.html",
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