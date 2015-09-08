'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', ['$scope', '$routeParams', 'Movie', function ($scope, $routeParams, Movie) {
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
  }]);
