/**
 * @ngdoc function
 * @name mobifixApp.controller:mobileRepairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobileRepairControllerConstructor($scope, $http) {

    $http.get("http://localhost:9000/mockData/mobilvariants.json")
      .then(function (response) {

        $scope.y = Object.keys(response.data);
         $scope.brand = response.data;

        $scope.selectedItemChanged = function (item) {
          $scope.brands = $scope.brand[item];

        }
        $scope.selectedModelItemChanged = function (item) {
          $scope.models = item;

        }
        $scope.selectedVariantItemChanged=function (item) {
          $scope.models = item;

        }
   });
 
    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
