/**
 * @ngdoc function
 * @name mobifixApp.controller:registerCtrl
 * @description
 * # registerCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

  function registerControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

        var vm = this;
      vm.$state = $state;

    function openLoginModal() {
      $uibModalInstance.close()

           	$('#registerModal').hide();

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('loginModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
  
      function register() {
        vm.registerCred = {
         
          LoginId: vm.username,
          ContactNumber: vm.ContactNumber,
          Password: vm.password,
          UserType: vm.UserType,
          NoOfAttempts: "",
          LastLoginDate: "NOW()",
          UserStatus: "",
          CreatedDate: "NOW()",
          CrearedBy: "",
          LastUpdateDate: "",
          LastUpdateBy: "",
          ContactPhoneID: "",
          ContactStatus: "",
          AddedDate: "NOW()",
          AddByUserID: "",
          ChangedDate: "NOW()",
          ChangedByID:""

        }

        httpDataService.register(vm.registerCred).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $rootScope.$broadcast("registerbroadcast", { status: 200 }); //catch in dashboard controller
            $rootScope.userData = resposeObj.data;
            $uibModalInstance.close()
          } else if (resposeObj.status == 404) {
            // Error Scenarios
            $rootScope.$broadcast("registerbroadcast", { status: 404 });
            $('#userPwd').show();
            $rootScope.userData = resposeObj.data;
          }
        });
      }
      vm.register = register;
        vm.openLoginModal = openLoginModal;
    }
    angular.module('mobifixApp')
      .controller('registerCtrl', registerControllerConstructor);
  
})(window.angular, window._);
