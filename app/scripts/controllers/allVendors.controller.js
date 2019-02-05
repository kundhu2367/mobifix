/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';
  function allVendorsControllerConstructor($sce, httpDataService, commonModal, $scope, $http) {
    //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: allUsersData});
    $http.get("http://mobfix.co.in/api/user/GetAllUsers")
      .then(function (response) {
        $scope.allUsersData = response.data;

      });
    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('allVendorsCtrl', allVendorsControllerConstructor);
})(angular);
