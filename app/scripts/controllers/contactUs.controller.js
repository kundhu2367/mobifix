/**
 * @ngdoc function
 * @name mobifixApp.controller:contactUsCtrl
 * @description
 * # contactUsCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function contactUsControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('contactUsCtrl', contactUsControllerConstructor);
})(angular);