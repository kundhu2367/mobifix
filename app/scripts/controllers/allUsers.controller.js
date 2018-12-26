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
         $http.get("http://localhost:50709/api/user/GetAllUsers")
           .then(function (response) {
             $scope.allUsersData = response.data;
         });
     
         var vm = this;
        vm.app = 'Mobifix'
     }
    angular.module('mobifixApp')
        .controller('allUsersCtrl', allUsersControllerConstructor);
})(angular);
