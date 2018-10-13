/**
 * @ngdoc function
 * @name mobifixApp.controller:blogCtrl
 * @description
 * # blogCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function blogControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('blogCtrl', blogControllerConstructor);
})(angular);