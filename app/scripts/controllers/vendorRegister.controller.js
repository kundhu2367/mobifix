/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorRegisterCtrl
 * @description
 * # vendorRegisterCtrl
 * Controller of the mobifixApp
 */
(function (angular, lodash) {
    'use strict';

  function vendorRegisterControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {


    var vm = this;
    vm.$state = $state;

    function openvendorLoginModal() {
      $uibModalInstance.close()

      $('#vendorRegisterModal').hide();

      var commonResolves = commonModal.commonResolves({});
      var resolveAttributes = {
        resolve: angular.extend(commonResolves.accountData)
      };
      var modalCallBack = function () {

      };
      var modalDismissCallBack = function () {
      };
      commonModal.openModal('loginModal', resolveAttributes, modalCallBack, modalDismissCallBack);
    }

    function vendorRegister() {
      vm.vendorRegisterCred = {
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

      httpDataService.vendorRegister(vm.vendorRegisterCred).then(function (resposeObj) {
        if (resposeObj.status == 200) {
         $('#vendorregisterSuccess').css("display","block");
            $('#vendorregistrationForm')[0].reset();
        } else if (resposeObj.status == 404) {
          // Error Scenarios
          $rootScope.$broadcast("vendorRegisterbroadcast", { status: 404 });
           $('#vendorregisterFailure').css("display","block");
          
          $rootScope.userData = resposeObj.data;
        }
      });
    }
    vm.vendorRegister = vendorRegister;
    vm.openvendorLoginModal = openvendorLoginModal;
  }
  angular.module('mobifixApp')
    .controller('vendorRegisterCtrl', vendorRegisterControllerConstructor);

})(window.angular, window._);
