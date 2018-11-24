/**
 * @ngdoc function
 * @name mobifixApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

    function loginControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

        var vm = this;
         vm.$state = $state;

           function openRegisterModal() {
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
          function openResetPasswordModal() {
            $uibModalInstance.close()

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

        function login() {
            vm.loginCred = {
                username : vm.username,
                password : vm.password
            }

            httpDataService.login(vm.loginCred).then(function(resposeObj){
                if(resposeObj.status == 200){
                    $rootScope.$broadcast("loginbroadcast", {status:200}); //catch in dashboard controller
                    $rootScope.userData = resposeObj.data;
                    $uibModalInstance.close()
                } else {
                    // Error Scenarios
                }
            });
        }

        vm.login = login;
        vm.openRegisterModal = openRegisterModal;
        vm.openResetPasswordModal = openResetPasswordModal;


    }
    angular.module('mobifixApp')
        .controller('loginCtrl', loginControllerConstructor);
})(window.angular, window._);
