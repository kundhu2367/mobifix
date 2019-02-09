/**
 * @ngdoc function
 * @name mobifixApp.controller:statusCtrl
 * @description
 * # statusCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

  function statusControllerConstructor($scope, $http, httpDataService, $state,$rootScope) {

        var vm = this;
    vm.$state = $state;

    
    function status() {
      vm.statusCred = {
        OrderID: vm.OrderID
        }

        httpDataService.status(vm.statusCred).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            vm.statusData = resposeObj.data;
          } else if (resposeObj.status == 404) {
          
          }
        });
      }

      vm.status = status;

    }
    
    angular.module('mobifixApp')
        .controller('statusCtrl', statusControllerConstructor);
})(angular);
