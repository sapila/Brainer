'use strict';

/**
 * @ngdoc overview
 * @name brainerApp
 * @description
 * # brainerApp
 *
 * Main module of the application.
 */
angular
  .module('brainerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/highscores', {
        templateUrl: 'views/highscores.html',
        controller: 'HighscoresCtrl'
      })
      .when('/selectedTest', {
        templateUrl: 'views/selectedtest.html',
        controller: 'SelectedtestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
