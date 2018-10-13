/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function aboutControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('aboutCtrl', aboutControllerConstructor);
})(angular);