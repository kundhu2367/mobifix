(function (angular) {
  'use strict';

  function myAuthInterceptorFactoryConstructor ($rootScope, $base64) {
    return {
      // Add authorization token to headers
      request: function (config) {
        if (!config.authRequired) {
          return config;
        }
        // config.headers.Authorization = 'Bearer p7O2MiSslrIZW2HifNKXTWhGZKzy4Qg+9BEwazC38bE=';
        // var userData = localStorage.getItem("currentUser");
        // userData = $base64.encode(userData);
        // config.headers.Authorization = 'Basic ' + userData;
        // return config;
      },
      responseError: function (resp) {
        if (resp.status === 401) {
          $rootScope.$emit('unauthorized');
        }
        return resp;
      }
    };
  }

  angular.module('mobifixApp')
    .factory('authInterceptor', myAuthInterceptorFactoryConstructor);

})(angular);
