const appModule = angular.module('myApp', [
  'ngRoute',
]);

appModule.config(($locationProvider, $routeProvider) => {
  $routeProvider
    .when('/', { redirectTo: '/home' })
    .when('/home', {
      templateUrl: 'app/views/header.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'app/views/header.html',
      controller: 'AboutController'
    })
    .when('/contacts', {
      templateUrl: 'app/views/header.html',
      controller: 'ContactsController',
    })
    .when('/gallery', {
      templateUrl: 'app/views/header.html',
      controller: 'GalleryController'
    })
    .otherwise({ redirectTo: '/' });
});
