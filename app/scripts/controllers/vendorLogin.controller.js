/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorloginCtrl
 * @description
 * # vendorloginCtrl
 * Controller of the mobifixApp
 */
 
(function(angular, lodash) {
    'use strict';

    function vendorLoginControllerConstructor($location, $state, $rootScope, credentials, httpDataService, commonModal) {

        var vm = this;

        function openVendorRegisterModal() {
           $('#loginModal').hide();

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };

            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('vendorregisterModal', resolveAttributes, modalCallBack, modalDismissCallBack);
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
            commonModal.openModal('vendorresetPasswordModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }

        vm.openVendorRegisterModal = openVendorRegisterModal;
        vm.openVendorResetPasswordModal = openVendorResetPasswordModal;

    }
    angular.module('mobifixApp')
        .controller('vendorLoginCtrl', vendorLoginControllerConstructor);
})(window.angular, window._);
