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


        function submit() {

            var userData = {
                "user": vm.username,
                "pass": vm.password
            }

            // httpDataService.login(userData).then(function (responseData) {
            //     var responseData = responseData;
            // });

            if (angular.isDefined(lodash.findKey(credentials, {'username': vm.username, 'password': vm.password}))) {
                //$location.path('/dashboard');
                localStorage.setItem("currentUser", vm.username+":"+vm.password);
                $state.go('accounts');
            }

        }

        function init() {
            localStorage.removeItem("currentUser");
        }

        vm.submit = submit;
        init();
    }
    angular.module('mobifixApp')
        .controller('loginCtrl', loginControllerConstructor);
})(window.angular, window._);
