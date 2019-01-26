/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorRegisterCtrl
 * @description
 * # vendorRegisterCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

  function vendorRegisterControllerConstructor($sce, $location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {


    var vm = this;
    vm.$state = $state;
    function openLoginModal() {
      $uibModalInstance.close()
      $('#registerModal').hide();

      var commonResolves = commonModal.commonResolves({});
      var resolveAttributes = {
        resolve: angular.extend(commonResolves.accountData)
      };
      var modalCallBack = function () {

      };
      var modalDismissCallBack = function () {
      };
      commonModal.openModal('vendorloginModal', resolveAttributes, modalCallBack, modalDismissCallBack);
    }

    function vendorregister() {
      vm.vendorregisterCred = {
        UserType: 2,
        LoginId: vm.username,
        Password: vm.password,
        NoOfAttempts: "",
        UserStatus: "",
        CrearedBy: 1,
        LastUpdateBy: 1,
        ContactPhoneID: "",
        ContactNumber: vm.ContactNumber,
        ContactStatus: "",
        AddByUserID: "",
        ChangedByID: ""
      }

      httpDataService.vendorregister(vm.vendorregisterCred).then(function (resposeObj) {
        if (resposeObj.status == 200) {
          $('#vendorregisterSuccess').show();
        } else if (resposeObj.status == 404) {
          // Error Scenarios
          $rootScope.$broadcast("vendorregisterbroadcast", { status: 404 });
          $('#userPwd').show();
          $rootScope.userData = resposeObj.data;
        }
      });
    }
    vm.vendorregister = vendorregister;
    vm.openLoginModal = openvendorLoginModal;
  }
  angular.module('mobifixApp')
    .controller('vendorRegisterCtrl', vendorRegisterControllerConstructor);
  //$scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
})(window.angular, window._);
