/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorloginCtrl
 * @description
 * # vendorloginCtrl
 * Controller of the mobifixApp
 */
 
(function(angular, lodash) {
    'use strict';

  function vendorLoginControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

      var vm = this;
      vm.$state = $state;

        function openVendorRegisterModal() {
          $uibModalInstance.close()

          var commonResolves = commonModal.commonResolves({});
          var resolveAttributes = {
            resolve: angular.extend(commonResolves.accountData)
          };

          var modalCallBack = function () {

          };
          var modalDismissCallBack = function () {
          };
          commonModal.openModal('registerModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
          function openVendorResetPasswordModal() {
            $('#registerModal').hide();
            $('#loginModal').hide();
            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('resetPasswordModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
      function vendorlogin() {
        vm.verdorloginCred = {
          LoginId: vm.username,
          Password: vm.password
        }

        httpDataService.vendorlogin(vm.vendorloginCred).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $rootScope.$broadcast("vendorloginbroadcast", { status: 200 }); //catch in dashboard controller
            $rootScope.userData = resposeObj.data;
            $uibModalInstance.close()
          } else if (resposeObj.status == 404) {
            // Error Scenarios
            $rootScope.$broadcast("vendorloginbroadcast", { status: 404 });
            $('#userPwd').show();
            $rootScope.userData = resposeObj.data;
          }
        });
      }

      vm.vendorlogin = vendorlogin;
        vm.openVendorRegisterModal = openVendorRegisterModal;
        vm.openVendorResetPasswordModal = openVendorResetPasswordModal;

    }
    angular.module('mobifixApp')
        .controller('vendorLoginCtrl', vendorLoginControllerConstructor);
})(window.angular, window._);
