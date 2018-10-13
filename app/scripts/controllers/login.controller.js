/**
 * @ngdoc function
 * @name mobifixApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

    function loginControllerConstructor($location, $state, $rootScope, credentials, httpDataService) {

        var vm = this;

    }
    angular.module('mobifixApp')
        .controller('loginCtrl', loginControllerConstructor);
})(window.angular, window._);
