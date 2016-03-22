'use strict';

describe('Controller: SelectedtestCtrl', function () {

  // load the controller's module
  beforeEach(module('brainerApp'));

  var SelectedtestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectedtestCtrl = $controller('SelectedtestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
