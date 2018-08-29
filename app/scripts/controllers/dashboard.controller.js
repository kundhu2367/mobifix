/**
 * @ngdoc function
 * @name mobifixApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

    function dashboardControllerConstructor($state) {
    	
        var vm = this;
        vm.$state = $state;

    }
    angular.module('mobifixApp')
        .controller('dashboardCtrl', dashboardControllerConstructor);
})(angular);