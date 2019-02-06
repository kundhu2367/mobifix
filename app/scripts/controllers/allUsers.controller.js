/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
  'use strict';
       function allUsersControllerConstructor($sce, httpDataService, commonModal,$scope, $http, $state) {

           httpDataService.allusers().then(function(resposeObj){
                if(resposeObj.status == 200){
                   $scope.allUsersData = resposeObj.data;
                   
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
            
                }
              });
     
         var vm = this;
         vm.app = 'Mobifix';
         vm.$state = $state;
     }
    angular.module('mobifixApp')
        .controller('allUsersCtrl', allUsersControllerConstructor);
})(angular);
