/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorLoginCtrl
 * @description
 * # vendorLoginCtrl
 * Controller of the mobifixApp
 */
 
(function(angular, lodash) {
    'use strict';

  function vendorLoginControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

      var vm = this;
      vm.$state = $state;

      function openvendorRegisterModal() {
        $uibModalInstance.close()

        var commonResolves = commonModal.commonResolves({});
        var resolveAttributes = {
          resolve: angular.extend(commonResolves.accountData)
        };

        var modalCallBack = function () {

        };
        var modalDismissCallBack = function () {
        };
        commonModal.openModal('vendorRegisterModal', resolveAttributes, modalCallBack, modalDismissCallBack);
      }
          function openVendorResetPasswordModal() {
            //$('#registerModal').hide();
            //$('#loginModal').hide();
            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('vendorresetPasswordModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
      function vendorLogin() {
        vm.vendorLoginCred = {
          LoginId: vm.username,
          Password: vm.password
        }

    //function vendorlogin() {
    //  vm.loginCred = {
    //    LoginId: vm.username,
    //    Password: vm.password
    //  }


        httpDataService.vendorLogin(vm.vendorLoginCred).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $rootScope.$broadcast("vendorLoginbroadcast", { status: 200 }); //catch in dashboard controller
            $rootScope.userData = resposeObj.data;
            $uibModalInstance.close()
          } else if (resposeObj.status == 404) {
            // Error Scenarios
            $rootScope.$broadcast("vendorLoginbroadcast", { status: 404 });
            $('#userPwd').show();
            $rootScope.userData = resposeObj.data;
          }
        });
      }

      vm.vendorLogin = vendorLogin;
        vm.openvendorRegisterModal = openvendorRegisterModal;
        vm.openVendorResetPasswordModal = openVendorResetPasswordModal;

    }
    angular.module('mobifixApp')
        .controller('vendorLoginCtrl', vendorLoginControllerConstructor);
})(window.angular, window._);
