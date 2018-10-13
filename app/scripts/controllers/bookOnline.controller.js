/**
 * @ngdoc function
 * @name mobifixApp.controller:bookOnlineCtrl
 * @description
 * # bookOnlineCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function bookOnlineControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix'

    }
    angular.module('mobifixApp')
        .controller('bookOnlineCtrl', bookOnlineControllerConstructor);
})(angular);