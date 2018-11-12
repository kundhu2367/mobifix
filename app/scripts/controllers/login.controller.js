/**
 * @ngdoc function
 * @name mobifixApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

    function loginControllerConstructor($location, $state, $rootScope, credentials, httpDataService, commonModal) {

        var vm = this;
         vm.$state = $state;

           function openRegisterModal() {
           $('#loginModal').hide();

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
          function openResetPasswordModal() {
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

        vm.openRegisterModal = openRegisterModal;
        vm.openResetPasswordModal = openResetPasswordModal;


    }
    angular.module('mobifixApp')
        .controller('loginCtrl', loginControllerConstructor);
})(window.angular, window._);
