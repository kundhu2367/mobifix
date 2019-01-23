/**
 * @ngdoc function
 * @name mobifixApp.controller:aboutCtrl
 * @description
 * # userProfileCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';
     function userProfileControllerConstructor($sce, httpDataService, commonModal,$scope, $http) {

      
    var vm = this;
    vm.app = 'Mobifix'
  }
  angular.module('mobifixApp')
    .controller('userProfileCtrl', userProfileControllerConstructor);
})(angular);
