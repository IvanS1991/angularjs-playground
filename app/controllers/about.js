// Registers the controller to the myApp module
angular.module('myApp')
  .controller('AboutController', ['$scope', function ($scope) {
    $scope.text = 'About';
  }]);
