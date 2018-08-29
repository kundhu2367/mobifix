/**
 * @ngdoc function
 * @name mobifixApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function homeControllerConstructor($sce, httpDataService, commonModal) {
        
        var vm = this;
        vm.app = 'Mobifix'
        
    }
    angular.module('mobifixApp')
        .controller('homeCtrl', homeControllerConstructor);
})(angular);
