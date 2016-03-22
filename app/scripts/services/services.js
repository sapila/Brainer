
/*Set and get of the test the user selected*/
angular.module('brainerApp').factory('testSelector', function() {
  var idOfSelectedTest = {}
  function set(testId) {
    idOfSelectedTest = testId;
  }
  function get() {
    return idOfSelectedTest;
  }

  return {
    set: set,
    get: get
  }

});
