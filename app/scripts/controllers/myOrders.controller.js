/**
 * @ngdoc function
 * @name mobifixApp.controller:myOrdersCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';
  function myOrdersControllerConstructor($sce, httpDataService, commonModal, $scope, $http, $state, $rootScope) {
    

   // vm.userData = $rootScope.userData[0];

    //    myOrdersData = { LoginId: userData.username };
    var vm = this;
    vm.app = 'Mobifix';
    // vm.$state = $state;
    vm.userData = $rootScope.userData[0];
    vm.myOrdersData = { LoginId: vm.userData.LoginId };



    httpDataService.myorders(vm.myOrdersData).then(function (resposeObj) {
                if(resposeObj.status == 200){
                   $scope.myOrdersData = resposeObj.data;
                   
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
            
                }
              });

    
  }

  angular.module('mobifixApp')
    .controller('myOrdersCtrl', myOrdersControllerConstructor);
})(angular);
