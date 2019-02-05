/**
 * @ngdoc function
 * @name mobifixApp.controller:myOrdersCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';
  function myOrdersControllerConstructor($sce, httpDataService, commonModal, $scope, $http) {
    //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: allUsersData});
    $http.get("http://localhost:50709/api/Order/GetemailOrder")
      .then(function (response) {
        $scope.myOrdersData = response.data;
      });

    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('myOrdersCtrl', myOrdersControllerConstructor);
})(angular);
