var app = angular.module('summitFootball', ['ngRoute', 'firebase', 'routeStyles'])
.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './pages/main/main.html',
        controller: 'mainCtrl',
        css: '../css/mainstyles.css'
      }).
      when('/staff', {
        templateUrl: './pages/staff/staff.html',
        controller: 'staffCtrl',
        css: '../css/staffstyles.css'
      }).
       when('/schedule', {
        templateUrl: './pages/schedule/schedule.html',
        controller: 'scheduleCtrl',
        css: '../css/schedulestyles.css'
      }).
      when('/contact', {
        templateUrl: './pages/contact/contact.html',
        controller: 'contactCtrl',
        // css: '../css/contactstyles.css'
      }).
      when('/roster', {
        templateUrl: './pages/roster/roster.html',
        controller: 'rosterCtrl',
        css: '../css/rosterstyles.css'
      }).
      otherwise({
        redirectTo: '/'
      });

  });

app.constant('fb', {
  url: 'https://sahs-roster.firebaseio.com/'
});

