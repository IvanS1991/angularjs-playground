// Registers the controller to the myApp module
angular.module('myApp')
  .controller('GalleryController', ['$scope', function ($scope) {
    $scope.text = 'Gallery';
  }]);
