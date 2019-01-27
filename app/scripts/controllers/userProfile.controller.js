/**
 * @ngdoc function
 * @name mobifixApp.controller:userProfileCtrl
 * @description
 * # userProfileCtrl
 * Controller of the mobifixApp
 */
(function (angular, lodash) {
  'use strict';

  function userProfileControllerConstructor($sce, httpDataService, commonModal, $scope, $http) {

  //  $location, $state, $rootScope, credentials, httpDataService, commonModal
    var vm = this;
    vm.app = 'Mobifix'

    //  var vm = this;
    //vm.$state = $state;

    
    
  function userProfile() {
    vm.userProfileCred = {
      LoginId: vm.username,
      FirstName: vm.FirstName,
      LastName: vm.LastName,
      FullName: "",
      AddressLine1: vm.AddressLine1,
      AddressLine2: vm.AddressLine2,
      City: vm.City,
      State: vm.State,
      Country: vm.Country,
      ZIPCode: vm.ZIPCode
    }

    httpDataService.userProfile(vm.userProfileCred).then(function (resposeObj) {
      if (resposeObj.status == 200) {
        //$('#registerSuccess').show();
      } else if (resposeObj.status == 404) {
        // Error Scenarios
        $rootScope.$broadcast("userProfilebroadcast", { status: 404 });
        $('#userPwd').show();
        $rootScope.userData = resposeObj.data;
      }
    });
  }
  vm.userProfile = userProfile;
}
  angular.module('mobifixApp')
    .controller('userProfileCtrl', userProfileControllerConstructor);
})(window.angular, window._);
