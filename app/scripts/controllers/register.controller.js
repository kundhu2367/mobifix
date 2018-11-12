/**
 * @ngdoc function
 * @name mobifixApp.controller:registerCtrl
 * @description
 * # registerCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

    function registerControllerConstructor($location, $state, $rootScope, httpDataService, commonModal) {

        var vm = this;
         vm.$state = $state;
           function openLoginModal() {

           	$('#registerModal').hide();

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
  

        vm.openLoginModal = openLoginModal;
    }
    angular.module('mobifixApp')
        .controller('registerCtrl', registerControllerConstructor);
})(window.angular, window._);