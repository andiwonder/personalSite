console.log("angular-app.js");
var myApp = angular.module("personalSite",['ngRoute','ngAnimate']);



myApp.controller('myController', ['$scope' , '$http' , '$routeParams' , '$window' , function($scope ,$http, $routeParams, $window){
  $window.ga('create', 'UA-XXXXXXXX-X', 'auto');
  $scope.proj1 = [{
    src: 'dota/1.png',
    title: 'Landing page'
  }, {
    src: 'dota/2.png',
    title: 'Status feed'
  }, {
    src: 'dota/3.png',
    title: 'Individual games performance'
  }, {
    src: 'dota/4.png',
    title: 'Games played over each day'
  }, {
    src: 'dota/5.png',
    title: 'Game data'
  }, {
    src: 'dota/6.png',
    title: 'Extract clips from twitch videos'
  }, {
    src: 'dota/7.png',
    title: 'Add notes to specific clips'
  }, {
    src: 'dota/8.png',
    title: 'View saved notes/clips'
  }, {
    src: 'dota/9.png',
    title: 'Guides'
  }];
  $scope.proj2 = [{
    src: 'listen/1.png',
    title: 'Landing page'
  }, {
    src: 'listen/2.png',
    title: 'SPSS (simple perfect squared squares)'
  }, {
    src: 'listen/3.png',
    title: 'Playlist visualized'
  }, {
    src: 'listen/4.png',
    title: 'Select a playlist'
  }, {
    src: 'listen/5.png',
    title: 'Listen to the playlist'
  }, {
    src: 'listen/6.png',
    title: 'Additional features'
  }, {
    src: 'listen/7.png',
    title: 'Artist bio'
  }, {
    src: 'listen/8.png',
    title: 'Playlist example'
  }, {
    src: 'listen/9.png',
    title: 'Playlist example'
  }, {
    src: 'listen/10.png',
    title: 'Playlist example'
  }];
}]);

myApp.run(function($rootScope, $location, $window){

  $window.ga('create', 'UA-83297043-1', 'auto');

  $rootScope.$on('$routeChangeSuccess', function (scope, next, current) {
      $window.ga('send', 'pageview', $location.path());
  });
})


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
    .when("/blog/3", {
      templateUrl : "javascript/blog/entry2/index.html",
      controller : "myController"
    })
    .when("/blog/2", {
      templateUrl : "javascript/blog/entry3/index.html",
      controller : "myController"
    })
    .when("/blog/4", {
      templateUrl : "javascript/blog/entry4/index.html",
      controller : "myController"
    })        
    .when('/projects',{
      templateUrl : "javascript/projects/project.html",
      controller : "myController"
    })
})



myApp.directive('donutChart', function() {
  return { restrict: 'E', link: function(scope, element) {
    // the D3 bits...
    var color = d3.scale.category10();
    var width = 500;
    var height = 500;
    var pie = d3.layout.pie().sort(null);
    var arc = d3.svg.arc()
      .outerRadius(width / 2 * 0.9)
      .innerRadius(width / 2 * 0.5);
    var svg = d3.select(element[0]).append('svg')
      .attr({width: width, height: height})
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    // add the <path>s for each arc slice
    svg.selectAll('path').data(pie([82, 62, 10, 32])) // our data
      .enter().append('path')
        .style('stroke', 'white')
        .attr('d', arc)
        .attr('fill', function(d, i){ return color(i) });
  }};
});

myApp.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
      scope.currentIndex = 0; // Initially the index is at the first image

      scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      };

      scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
      };

      scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
          image.visible = false; // make every image invisible
        });

        scope.images[scope.currentIndex].visible = true; // make the current image visible
      });
    },
    templateUrl: 'javascript/projects/slider.html',
  };
});





myApp.directive('githubTable', function() {
  return { restrict: 'E', link: function(scope, element) {

    console.log("index.js here");
    // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.1/d3.js"></script> 

    var commit_data = [];

    var first_wk_arr = [];
    var second_wk_arr = [];
    var third_wk_arr = [];
    var last_wk_arr = [];


    var first_wk_range = [11,12,13,14,15,16,17];
    var second_wk_range = [18,19,20,21,22,23,24];
    var thir_wk_range = [25,26,27,28,29,30,31];
    var last_wk_range = [1,2,3,4,5,6,7];

    var first_wk_firstday = new Date('2016-07-11 00:00:00');
    var first_wk_lastday = new Date('2016-07-18 00:00:00');

    var second_wk_firstday = new Date('2016-07-18 00:00:00');
    var second_wk_lastday = new Date('2016-07-25 00:00:00');

    var third_wk_firstday = new Date('2016-07-25 00:00:00');
    var third_wk_lastday = new Date('2016-08-01 00:00:00');

    var last_wk_firstday = new Date('2016-08-01 00:00:00');
    var last_wk_lastday = new Date('2016-08-09 00:00:00');


    var first_wk_obj = {};
    var second_wk_obj = {};
    var third_wk_obj = {};
    var last_wk_obj = {};


    var data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    var data2 = [0,1,2,3,4,5,6,7,8,9];




    // var addCommit = function addCommit(date, contributor, message, container){
    //   var commit = $("<div class='commit'></div>");
      
    //   var commit_date = $("<div class='commit-date'></div>");
    //   commit_date.append($("<svg aria-hidden='true' class='octicon octicon-git-commit' height='16' version='1.1' viewBox='0 0 14 16' width='14'> <path d='M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z'></path></svg>"));    
    //   commit_date.append($("<span> Commits on " + date + "</span>"));   

    //   var commit_message = $("<div class='commit-message'></div>");
    //   var commit_message_innerdiv = $("<div class='commit-message-innerdiv'></div>");
    //   commit_message_innerdiv.append($('<img>',{src:"images/" + contributor + ".png"}))
    //   commit_message_innerdiv.append($("<h3>" + message + "</h3>"));   
    //   commit_message.append(commit_message_innerdiv);
      
    //   commit.append(commit_date);
    //   commit.append(commit_message);
    //   $(container).append(commit);
    // };

    var addCommit_Date = function addCommit(date){
      
      var commit_date = $("<div class='commit-date'></div>");
      commit_date.append($("<svg aria-hidden='true' class='octicon octicon-git-commit' height='16' version='1.1' viewBox='0 0 14 16' width='14'> <path d='M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z'></path></svg>"));    
      commit_date.append($("<span> Commits on " + date + "</span>"));   
      return commit_date;
    };


    var addCommit_Message = function addCommit(message, hourMin, contributor){
      var commit_message = $("<div class='commit-message'></div>");
      var commit_message_innerdiv = $("<div class='commit-message-innerdiv'></div>");
      var text_wrapper = $("<div class='text-wrapper'></div>");
      var image_wrapper = $("<div class='img-wrapper'></div>");


      image_wrapper.append($('<img>',{src:"images/blog/post-4/" + contributor}))
      commit_message_innerdiv.append(image_wrapper);
      text_wrapper.append($("<h3>" + message +  "<br><span class=\"commit-message-date\">" + hourMin + "</span></h3>"));   
      commit_message_innerdiv.append(text_wrapper)
      commit_message.append(commit_message_innerdiv);
      return commit_message;
    };


    var makeTable = function makeTable(){
      
    };

    $(document).ready(function(date, contributor, message, container){
      
      $.getJSON('https://s3-us-west-2.amazonaws.com/dotaempower/temp.json', function(data) {
        data.forEach(function (d) {
          var current_date = new Date(d.date);
          var hours = ((current_date.getHours() + 11) % 12 + 1);
          var suffix = (current_date.getHours() >= 12)? 'pm' : 'am';
          var minutes = (current_date.getMinutes()<10?'0':'') + current_date.getMinutes()
          d.hourMin = " " +  hours + ":" + minutes + suffix;
          console.log(d.name);
          d.contributor = "";
          switch (d.name){
            case "kaitlingu":
            case "Kaitlin Gu":
            d.contributor = "lindsay.png";
            break;
            case "Jon Moss":
            d.contributor = "daniel.jpg";
            break;
            case "Allison McHenry":
            d.contributor = "kristy";
            break;
            case "Anna Brown":
            d.contributor = "veronika.jpg";
            break;
            case "Swapnil Kasliwal":
            d.contributor = "matthew";
            break;
          }
          d.parsed_date = current_date
          d.date_day = current_date.getDate();
          d.message = d.message;

          // console.log(d.message);
          commit_data.push(d);
        });
        // make_git_d3();
        // make_trello_d3();
        _.each(commit_data, function(commit){
          // console.log(commit.parsed_date > last_wk_firstday);
          // console.log(commit.parsed_date);
          if (commit.parsed_date > first_wk_firstday && commit.parsed_date < first_wk_lastday) {
            first_wk_arr.push(commit);
          } else if (commit.parsed_date > second_wk_firstday && commit.parsed_date < second_wk_lastday) {
            second_wk_arr.push(commit);
          } else if (commit.parsed_date > third_wk_firstday && commit.parsed_date < third_wk_lastday) {
            third_wk_arr.push(commit);
          } else if (commit.parsed_date > last_wk_firstday && commit.parsed_date < last_wk_lastday) {
            last_wk_arr.push(commit);
          };
        });

        // console.log("1st wk","2nd wk","3rd wk","4th wk")
        // console.log("8-1 to 8-8","7-25 to 8-1","7-18 to 7-25","7-11 to 7-18")
        // console.log(first_wk_arr.length, second_wk_arr.length, third_wk_arr.length, last_wk_arr.length);


        for (var i = 0; i < first_wk_arr.length; i++) {
          var day = first_wk_arr[i].parsed_date.getDate();
          // console.log(first_wk_arr[i].parsed_date);
          first_wk_obj[day] = (first_wk_obj[day] + 1) || 1;
        };
        for (var i = 0; i < second_wk_arr.length; i++) {
          var day = second_wk_arr[i].parsed_date.getDate();
          // console.log(second_wk_arr[i].parsed_date);
          second_wk_obj[day] = (second_wk_obj[day] + 1) || 1;
        };
        for (var i = 0; i < third_wk_arr.length; i++) {
          var day = third_wk_arr[i].parsed_date.getDate();
          // console.log(third_wk_arr[i].parsed_date);
          third_wk_obj[day] = (third_wk_obj[day] + 1) || 1;
        };
        for (var i = 0; i < last_wk_arr.length; i++) {
          var day = last_wk_arr[i].parsed_date.getDate();
          // console.log(last_wk_arr[i].parsed_date);
          last_wk_obj[day] = (last_wk_obj[day] + 1) || 1;
        };
        // console.log(first_wk_obj);
        // console.log(second_wk_obj);
        // console.log(third_wk_obj);
        // console.log(last_wk_obj);
        console.log("document ready fired");
        var commit = $('<div data-table_id="1" class="commit active"></div>');
        var items_counter = 0;
        var table_counter = 1;

        for (var i =0; i < first_wk_arr.length; i++){
          // console.log("index " + i);
          // console.log("items_counter: " + items_counter);
          if (items_counter == 0) {
            commit.append(addCommit_Date(first_wk_arr[i].parsed_date));
            items_counter++;
          } else if (+first_wk_arr[i].date_day != +first_wk_arr[i-1].date_day) {
            console.log(first_wk_arr[i].contributor);
            commit.append(addCommit_Date(first_wk_arr[i].parsed_date));
            commit.append(addCommit_Message(first_wk_arr[i].message, first_wk_arr[i].hourMin, first_wk_arr[i].contributor));
            items_counter = items_counter + 2;
          } else if (+first_wk_arr[i].date_day == +first_wk_arr[i-1].date_day) {
            commit.append(addCommit_Message(first_wk_arr[i].message, first_wk_arr[i].hourMin, first_wk_arr[i].contributor));
            items_counter++;
          }

          if (items_counter == 10 || items_counter == 11){
            console.log("new commit");
            table_counter++
            $('.github-table').append(commit);
            commit = $('<div data-table_id="' + table_counter + '" class="commit hidden"></div>');
            items_counter = 0;
          } 
        }

        $('.github-table').append(commit);

      });
    });
  }};
});

