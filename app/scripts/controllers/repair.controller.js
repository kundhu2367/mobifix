/**
 * @ngdoc function
 * @name mobifixApp.controller:repairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function repairControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'
        

    }
    angular.module('mobifixApp')
        .controller('repairCtrl', repairControllerConstructor);
})(angular);