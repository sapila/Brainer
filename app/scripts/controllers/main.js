'use strict';

/**
 * @ngdoc function
 * @name brainerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brainerApp
 */
angular.module('brainerApp')
  .controller('MainCtrl', function ($scope,$location,testSelector) {

    var html ={
      id:1,
      name:"HTML Test",
      questionsNum: 10,
      difficulty:"Easy",
    }
    var css ={
      id:2,
      name:"CSS Test",
      questionsNum: 10,
      difficulty:"Easy",
    }
    var javascript ={
      id:3,
      name:"Javascript Test",
      questionsNum: 10,
      difficulty:"Medium",
    }
    var javascript3 ={
      id:3,
      name:"Javascript Test",
      questionsNum: 10,
      difficulty:"Medium",
    }


    $scope.availableTests = [html, css, javascript,javascript3];

    $scope.testSelection = function(testId){
                              testSelector.set(testId);
                              $location.path("/selectedTest");
                            }
  });
