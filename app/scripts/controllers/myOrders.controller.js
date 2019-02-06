/**
 * @ngdoc function
 * @name mobifixApp.controller:myOrdersCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';
  function myOrdersControllerConstructor($sce, httpDataService, commonModal, $scope, $http, $state) {

     httpDataService.myorders().then(function(resposeObj){
                if(resposeObj.status == 200){
                   $scope.myOrdersData = resposeObj.data;
                   
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
            
                }
              });

    var vm = this;
    vm.app = 'Mobifix';
    vm.$state = $state;
  }
  angular.module('mobifixApp')
    .controller('myOrdersCtrl', myOrdersControllerConstructor);
})(angular);
