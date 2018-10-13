/**
 * @ngdoc function
 * @name mobifixApp.controller:statusCtrl
 * @description
 * # statusCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function statusControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('statusCtrl', statusControllerConstructor);
})(angular);