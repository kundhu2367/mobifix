/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorProfileCtrl
 * @description
 * # vendorProfileCtrl
 * Controller of the mobifixApp
 */
(function (angular, lodash) {
  'use strict';

  function vendorProfileControllerConstructor($sce, httpDataService, commonModal, $scope, $http) {


    var vm = this;
    vm.app = 'Mobifix'

    function vendorProfile() {
      vm.vendorProfileCred = {
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

      httpDataService.vendorProfile(vm.vendorProfileCred).then(function (resposeObj) {
        if (resposeObj.status == 200) {
          //$('#registerSuccess').show();
        } else if (resposeObj.status == 404) {
          // Error Scenarios
          $rootScope.$broadcast("vendorProfilebroadcast", { status: 404 });
          $('#userPwd').show();
          $rootScope.userData = resposeObj.data;
        }
      });
    }
    vm.vendorProfile = vendorProfile;
  }

  angular.module('mobifixApp')
    .controller('vendorProfileCtrl', vendorProfileControllerConstructor);
})(window.angular, window._);







//     function allUsersControllerConstructor($sce, httpDataService, commonModal,$scope, $http) {
//       //var self = this;
//    //self.tableParams = new NgTableParams({}, { dataset: allUsersData});
//     	 $http.get("http://localhost:50709/api/user/GetAllUsers")
//  		.then(function(response) {
//     	 $scope.allUsersData = response.data;
         
//             });

//         var vm = this;
//        vm.app = 'Mobifix'
//     }
//    angular.module('mobifixApp')
//        .controller('vendorProfileCtrl', allUsersControllerConstructor);
//})(angular);
