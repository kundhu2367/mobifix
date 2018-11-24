/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';
     function allUsersControllerConstructor($sce, httpDataService, commonModal,$scope, $http) {
       //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: allUsersData});
     	httpDataService.getallusers.then(function(response) {
     	 vm.allUsersData = response.data;
         
  });
         var vm = this;
        vm.app = 'Mobifix'
     }
    angular.module('mobifixApp')
        .controller('allUsersCtrl', allUsersControllerConstructor);
})(angular);
