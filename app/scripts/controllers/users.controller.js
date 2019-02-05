
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
   /* $http.get("http://mobfix.co.in/api/User/Getuser")
      .then(function (response) {
        $scope.usersData = response.data;

      });*/
    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('usersCtrl', usersControllerConstructor);
})(angular);

