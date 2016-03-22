'use strict';

/**
 * @ngdoc function
 * @name brainerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brainerApp
 */
angular.module('brainerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
