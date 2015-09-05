'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', [ '$scope', function ($scope) {
    $scope.movies = [
      {
        "_id":"55e4b77a8444903418bdefa7",
        "title":"I Remember You",
        "url":"https://www.youtube.com/watch?v=OhPFgqHz68o",
        "__v":0
      },
      {
        "_id":"55e4b8448444903418bdefa9",
        "title":"How to build a M.E.A.N web application",
        "url":"https://www.youtube.com/watch?v=OhPFgqHz68o",
        "__v":0
      }
    ];
  }]);
