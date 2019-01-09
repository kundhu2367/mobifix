
/**
 * @ngdoc function
 * @name mobifixApp.controller:userProfile
 * @description
 * # userProfile
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';
  function usersControllerConstructor($sce, httpDataService, commonModal, $scope, $http) {
    //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: userProfileData});
   /* $http.get("http://localhost:50709/api/User/Getuser")
      .then(function (response) {
        $scope.usersData = response.data;

      });*/
    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('usersCtrl', usersControllerConstructor);
})(angular);

