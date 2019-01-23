/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # userProfileCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';
     function userProfileControllerConstructor($sce, httpDataService, commonModal,$scope, $http) {
      

       $http({
         url: 'http://localhost:50709/api/User/Getuser',
         method: "POST",
         data: {
           "LoginId": vm.username, "Password": vm.Password},
         headers: {
           'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
           'Accept': 'application/json;odata=verbose'
         }
       })
      .then(function (response) {
        $scope.userProfileData = response.data;

         });

    var vm = this;
    vm.app = 'Mobifix'
     }
  function userProfile() {
    vm.userprofileCred = {
      FirstName: vm.FirstName,
      LastName: vm.LastName,
      ContactNumber: vm.ContactNumber,
      ContactNumber: vm.ContactNumber,
      LoginId: vm.LoginId,
      Password: vm.password,
      AddressLine1: vm.AddressLine1,
      AddressLine2: vm.AddressLine2,
      City: vm.City,
      State: vm.State,
      Country: vm.Country,
      ZipCode: vm.ZipCode

    }
    httpDataService.userProfile(vm.userprofileCred).then(function (resposeObj) {
      if (resposeObj.status == 200) {
        $rootScope.$broadcast("userprofilebroadcast", { status: 200 }); //catch in dashboard controller
        $rootScope.userData = resposeObj.data;
        $uibModalInstance.close()
      } else if (resposeObj.status == 404) {
        // Error Scenarios
        $rootScope.$broadcast("userprofilebroadcast", { status: 404 });
        $('#userPwd').show();
        $rootScope.userData = resposeObj.data;
      }
    });
  }
  vm.userProfile = userProfile;
  angular.module('mobifixApp')
    .controller('userProfileCtrl', userProfileControllerConstructor);
})(angular);
