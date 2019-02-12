/**
 * @ngdoc function
 * @name mobifixApp.controller:privacyPolicyCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function privacyPolicyControllerConstructor($sce, httpDataService, commonModal) {

    var vm = this;
    vm.app = 'Mobifix'

  }
  angular.module('mobifixApp')
    .controller('privacyPolicyCtrl', privacyPolicyControllerConstructor);
})(angular);
