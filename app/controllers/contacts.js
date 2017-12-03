// Registers the controller to the myApp module
angular.module('myApp')
  .controller('ContactsController', ['$scope', function ($scope) {
    $scope.text = 'Contacts';
  }]);
