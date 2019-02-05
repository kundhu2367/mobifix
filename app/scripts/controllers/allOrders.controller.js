/**
 * @ngdoc function
 * @name mobifixApp.controller:allOrdersCtrl
 * @description
 * # allOrdersCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';
     function allOrdersControllerConstructor($sce, httpDataService, commonModal,$scope, $http) {
       //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: allOrdersData});
       $http.get("http://localhost:50709/api/Order/GetAllOrders")
  		.then(function(response) {
     	 $scope.allOrdersData = response.data;
         
  });
         var vm = this;
        vm.app = 'Mobifix'
     }
    angular.module('mobifixApp')
        .controller('allOrdersCtrl', allOrdersControllerConstructor);
})(angular);
