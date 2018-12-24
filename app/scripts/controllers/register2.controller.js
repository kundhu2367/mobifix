angular.module('PTTP.Controllers.Form', [])
  .controller('registerControllerConstructor', function ($scope) {
    $scope.formElements = {
      email: '',
      emailConfirmation: ''
    };
    $scope.checkEmailMatch = function (value) {
      return value === $scope.formElements.email;
    };
  };
