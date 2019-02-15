/**
 * @ngdoc function
 * @name mobifixApp.controller:faqCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function faqControllerConstructor($sce, httpDataService, commonModal) {

    var vm = this;
    vm.app = 'Mobifix'

  }
  angular.module('mobifixApp')
    .controller('faqCtrl', faqControllerConstructor);
})(angular);
