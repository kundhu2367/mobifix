(function (angular) {
  'use strict';

  function httpDataServiceFn(apiUrls, httpRequestWrapper) {

    // function getApiURL(apiKey) {
    //   var apiURL = apiUrls.apiKey;
    //   apiURL = apiURL.replace('{{domain}}', location.origin);
    //   return apiURL;
    // }

    function getAccountDetails() {
      var url = apiUrls.getAccounts;
      return httpRequestWrapper.get(url, null, null, true);
    }

    function saveAcctDetails (acctData) {
      var url = apiUrls.addAccount;
      return httpRequestWrapper.post(url, acctData, null, null, true);
    }

    function updateAcctDetails (acctData) {
      var url = apiUrls.addAccount;
      return httpRequestWrapper.put(url, acctData, null, null, true);
    }

    function deleteAccountDetails (acctData) {
      var url = apiUrls.deleteAccount;
      return httpRequestWrapper['delete'](url, acctData, null, true);
    }

    function login (userData) {
      var url = apiUrls.login;
      // var successResponse = {status:200};
      // var errorResponse = {status:400};
      // return successResponse;
      // return httpRequestWrapper.post(url, userData, null, null, false);
      return httpRequestWrapper.post(url,userData,null, null, true);
    }

    function register(userData) {
      var url = apiUrls.register;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }

    function userProfile(userData) {
      var url = apiUrls.userProfile;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }


    function logout (userData) {
      var url = apiUrls.logout;
      var data = userData ? userData : null;
      return httpRequestWrapper.post(url, data, null, null, false);
    }

    return {
      login: login,
      register: register,
      userProfile: userProfile,
      logout: logout
    };
  }

  angular.module('mobifixApp')
    .service('httpDataService', httpDataServiceFn);

})(window.angular);
