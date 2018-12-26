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
       //var self = this;
    //self.tableParams = new NgTableParams({}, { dataset: allUsersData});
 
       //$http.post("/api/User/Getuser")({
       //  data: { "LoginId": "testAdmin1@gmail.com", "Password": "94ba69fdd6ac7c1576e4b079514aa04004822824"}

       //})
       $http({
         url: 'http://localhost:50709/api/User/Getuser',
         method: "POST",
         data: { "LoginId": "testAdmin1@gmail.com", "Password": "94ba69fdd6ac7c1576e4b079514aa04004822824" },
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
  angular.module('mobifixApp')
    .controller('userProfileCtrl', userProfileControllerConstructor);
})(angular);
