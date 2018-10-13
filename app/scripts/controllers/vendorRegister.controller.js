/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorRegisterCtrlCtrl
 * @description
 * # vendorRegisterCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function vendorRegisterControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('vendorRegisterCtrl', vendorRegisterControllerConstructor);
})(angular);