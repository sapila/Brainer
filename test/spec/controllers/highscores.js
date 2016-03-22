'use strict';

describe('Controller: HighscoresCtrl', function () {

  // load the controller's module
  beforeEach(module('brainerApp'));

  var HighscoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HighscoresCtrl = $controller('HighscoresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
