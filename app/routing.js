// Configures myApp module's routing
angular.module('myApp')
  .config(($locationProvider, $routeProvider) => { // Injecting $locationProvider and $routeProvider
    $routeProvider
      .when('/', { redirectTo: '/home' })
      // Home route
      .when('/home', {
        templateUrl: 'app/views/header.html',
        controller: 'HomeController'
      })
      // About route
      .when('/about', {
        templateUrl: 'app/views/header.html',
        controller: 'AboutController'
      })
      // Contacts route
      .when('/contacts', {
        templateUrl: 'app/views/header.html',
        controller: 'ContactsController',
      })
      // Gallery route
      .when('/gallery', {
        templateUrl: 'app/views/header.html',
        controller: 'GalleryController'
      })
      // Invalid route
      .otherwise({ redirectTo: '/' });
  });
