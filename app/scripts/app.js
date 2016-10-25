'use strict';

/**
 * @ngdoc overview
 * @name proofOfConceptApp
 * @description
 * # proofOfConceptApp
 *
 * Main module of the application.
 */
angular
  .module('proofOfConceptApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toaster',
    'kendo.directives'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pharmacy', {
        templateUrl: 'views/pharmacy.html',
        controller: 'PharmacyCtrl',
        controllerAs: 'pharmacy'
      })
      .when('/pharmacy-create', {
        templateUrl: 'views/pharmacyCreate.html',
        controller: 'PharmacyCreateCtrl',
        controllerAs: 'pharmacy-create'
      })      
      .otherwise({
        redirectTo: '/'
      });
    
    //Resetting headers
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  });