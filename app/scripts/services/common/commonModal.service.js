(function (angular) {
    'use strict';

    function commonModalConstructor($uibModal, $log) {

    	var commonResolves;

        function openModal(modalName, modalResolve, modalCallBack, modalDismissCallBack) {
            //$log.log('modalResolve::', angular.extend(modalSettings[modalName], modalResolve));
            var modalInstance = $uibModal.open(
            angular.extend(modalSettings[modalName], modalResolve));
            modalInstance.result.then(function (modalObject) {
                //$log.log('Here is the API response for openModal', modalObject);
                modalCallBack(modalObject);
            }, function (err) {
               // $log.log('dismiss............', err);
                if (modalDismissCallBack) {
                    modalDismissCallBack();
                }
            });
        }

        function getCommonResolves(accountData) {
            commonResolves = {
                accountData: {
                    accountData: function () {
                        return accountData;
                    }
                }
            };
            return commonResolves;
        }

        var modalSettings = {
            addApiKeyModal: {
                size: 'md',
                windowClass: 'add-apikey-modal',
                templateUrl: 'views/addApiKey.html',
                controller: 'addApiKeyCtrl',
                controllerAs: 'vm'
            }
        };

        return {
            openModal: openModal,
            commonResolves: getCommonResolves
        };

    }
    angular.module('mobifixApp')
        .service('commonModal', commonModalConstructor);

})(angular);