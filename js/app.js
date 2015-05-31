var app = angular.module('summitFootball', ['ngRoute', $routeProvider]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/pages/main/main.html',
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
      when('/staff', {
        templateUrl: 'pages/contact/contact.html',
        controller: 'contactCtrl'
      }).
      otherwise({
        redirectTo: '/'

  }]);
