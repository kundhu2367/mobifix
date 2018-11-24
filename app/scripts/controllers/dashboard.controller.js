/**
 * @ngdoc function
 * @name mobifixApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function dashboardControllerConstructor($state, $rootScope, commonModal) {
    	
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

         function openVendorLoginModal() {

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('vendorLoginModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }

        $rootScope.$on("loginbroadcast", function(evt,data){
            console.log( data)
            vm.showProfile = true;
        });
  
        vm.showProfile = false;
        vm.openLoginModal = openLoginModal;
        vm.openVendorLoginModal = openVendorLoginModal;


    }
    angular.module('mobifixApp')
        .controller('dashboardCtrl', dashboardControllerConstructor);
})(angular);