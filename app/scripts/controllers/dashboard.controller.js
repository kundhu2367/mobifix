/**
 * @ngdoc function
 * @name mobifixApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function dashboardControllerConstructor($state, commonModal) {
    	
        var vm = this;
        vm.$state = $state;

        function openLoginModal() {

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
        .controller('dashboardCtrl', dashboardControllerConstructor);
})(angular);