/**
 * @ngdoc function
 * @name mobifixApp.controller:resetPasswordCtrl
 * @description
 * # resetPasswordCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function resetPasswordControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }

  angular.module('mobifixApp')
        .controller('resetPasswordCtrl', resetPasswordControllerConstructor);
})(angular);
