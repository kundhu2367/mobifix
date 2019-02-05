/**
 * @ngdoc function
 * @name mobifixApp.controller:mobileRepairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobileRepairControllerConstructor($scope, $http, httpDataService) {

    $http.get("http://mobfix.co.in/api/MobileTypes/GetAllMobileTypes")
      .then(function (response) {

 
         $scope.brand = response.data;


        $scope.selectedItemChanged = function (item) {

          vm.slectedBrand = {
                MobileCompanyID : item.MobileCompanyID
              
            }

            httpDataService.brandModel(vm.slectedBrand).then(function(resposeObj){
                if(resposeObj.status == 200){
              $scope.model=resposeObj.data;


              }
            });
            }

        $scope.selectedModelItemChanged = function (item) {
          vm.slectedModel = {
                MobileVerTypeID : item.MobileVersionTypeID
              
            }

            httpDataService.issuePrice(vm.slectedModel).then(function(resposeObj){
                if(resposeObj.status == 200){
              $scope.issueprice=resposeObj.data;


              }
            });
            }
     
   });
 
    var vm = this;
           vm.eduToEdit = {};
  vm.eduToEdit.test = false;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
