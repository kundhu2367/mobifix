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

        function openloginModal() {

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
      
      function openvendorLoginModal() {

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
        function signOff() {
            $rootScope.userData = null;
            vm.showProfile = false;
        }

        $rootScope.$on("loginbroadcast", function(evt,data){
            console.log( data)
            vm.showProfile = true;
        });
         $rootScope.$on("sessionbroadcast", function(evt,data){
            console.log( data)
            vm.showProfile = true;
        });

      $rootScope.$emit('initiateEvent', null); 
      $rootScope.$on("vendorLoginbroadcast", function (evt, data) {
        console.log(data)
        vm.showProfile = true;
      });
  
        vm.showProfile = false;
      vm.openloginModal = openloginModal;
      vm.openvendorLoginModal = openvendorLoginModal;
      vm.signOff = signOff;


    }
    angular.module('mobifixApp')
        .controller('dashboardCtrl', dashboardControllerConstructor);
})(angular);
