'use strict';

/**
 * @ngdoc function
 * @name brainerApp.controller:HighscoresCtrl
 * @description
 * # HighscoresCtrl
 * Controller of the brainerApp
 */
angular.module('brainerApp')
  .controller('HighscoresCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
