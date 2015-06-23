;(function (){

  'use strict';

  angular.module('ButtonDemo', [])

  .controller('ButtonController', ['$scope', function ($scope){

    $scope.allClicks = [];

    var Click = function (count) {
      this.count = 0;

    };


    $scope.clicked = function (x) {
      var c = new Click();
      c.count = +1;
      $scope.allClicks.push(c);
    };



    $scope.counter = function (x) {
      return $scope.allClicks.length;

    };

    $scope.remove = function(x) {
      $scope.allClicks = [];
    };

  }]);

}());
