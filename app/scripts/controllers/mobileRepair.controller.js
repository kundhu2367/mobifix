/**
 * @ngdoc function
 * @name mobifixApp.controller:mobilerepairCtrl
 * @description
 * # mobilerepairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobilerepairControllerConstructor($sce, httpDataService, commonModal) {

    var vm = this;
    vm.app = 'Mobifix'


  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobilerepairControllerConstructor);
})(angular);
