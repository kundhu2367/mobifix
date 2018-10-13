/**
 * @ngdoc function
 * @name mobifixApp.controller:productDetailsFormCtrl
 * @description
 * # productDetailsFormCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function productDetailsFormControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('productDetailsFormCtrl', productDetailsFormControllerConstructor);
})(angular);