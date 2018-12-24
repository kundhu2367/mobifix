/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorRegisterCtrl
 * @description
 * # vendorRegisterCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

  function vendorRegisterControllerConstructor($sce, $state, httpDataService, commonModal) {


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
    .controller('vendorRegisterCtrl', vendorRegisterControllerConstructor);
  $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
})(window.angular, window._);
