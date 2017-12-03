// Registers the controller to the myApp module
angular.module('myApp')
  .controller('HomeController', ['$scope', 'difference', function ($scope, difference) {
    $scope.text = 'Home';
    $scope.difference = difference
      .trim()
      .split('\n');
  }]);
