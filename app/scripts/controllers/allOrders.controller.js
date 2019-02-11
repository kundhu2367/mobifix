/**
 * @ngdoc function
 * @name mobifixApp.controller:allOrdersCtrl
 * @description
 * # allOrdersCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';
     function allOrdersControllerConstructor($sce, httpDataService, commonModal,$scope, $http, $state) {
       var vm = this;
       vm.app = 'Mobifix';
       vm.$state = $state;

            httpDataService.allorders().then(function(resposeObj){
                if(resposeObj.status == 200){
                   $scope.allOrdersData = resposeObj.data;
                   
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
            
                }
              });
         }
    angular.module('mobifixApp')
        .controller('allOrdersCtrl', allOrdersControllerConstructor);
})(angular);
