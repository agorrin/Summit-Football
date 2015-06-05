var app = angular.module('summitFootball', ['ngRoute', 'firebase']);

app.constant('fb', {
  url: 'https://sahs-roster.firebaseio.com/'
});

app.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/main/main.html',
        controller: 'mainCtrl'
      }).
      when('/staff', {
        templateUrl: 'pages/staff/staff.html',
        controller: 'staffCtrl'
      }).
       when('/schedule', {
        templateUrl: 'pages/schedule/schedule.html',
        controller: 'scheduleCtrl'
      }).
      when('/contact', {
        templateUrl: 'pages/contact/contact.html',
        controller: 'contactCtrl'
      }).
      when('/roster', {
        templateUrl: 'pages/roster/roster.html',
        controller: 'rosterCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

  });
