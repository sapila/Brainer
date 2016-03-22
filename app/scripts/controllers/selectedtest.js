'use strict';

/**
 * @ngdoc function
 * @name brainerApp.controller:SelectedtestCtrl
 * @description
 * # SelectedtestCtrl
 * Controller of the brainerApp
 */
angular.module('brainerApp')
  .controller('SelectedtestCtrl', function ($scope,testSelector) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.id = testSelector.get();
  });
