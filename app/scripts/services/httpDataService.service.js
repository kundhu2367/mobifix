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
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function allorders(){
      var url = apiUrls.allorders;
      return httpRequestWrapper.get(url,null, null, true);
    }
     function allusers(){
      var url = apiUrls.allusers;
      return httpRequestWrapper.get(url,null, null, true);
    }
    function myorders(userData){
      var url = apiUrls.myorders;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function status(userData) {
      var url = apiUrls.status;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function brandModel (userData) {
      var url = apiUrls.model;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function issuePrice (userData) {
      var url = apiUrls.issueprice;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
   function register(userData) {
      var url = apiUrls.register;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function userProfile(userData) {
      var url = apiUrls.userProfile;
      return httpRequestWrapper.put(url, userData, null, null, true);
    }

    function checkout(userData) {
      var header={"x-api-key":"d703f4f1b0f4d375e1c0efcd8be7f9bc","X-Auth-Token":"6c88138892719fa75e76768e6cfe7696"}
      var url = apiUrls.checkout;
      return httpRequestWrapper.post(url, userData, null, header, true);
    }

    function vendorProfile(userData) {
      var url = apiUrls.vendorProfile;
      return httpRequestWrapper.put(url, userData, null, null, true);
    }

    function vendorLogin(userData) {
      var url = apiUrls.vendorLogin;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }

    function vendorRegister(userData) {

      var url = apiUrls.vendorRegister;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function allmobiletypes() {

      var url = apiUrls.allmobiletypes;
      return httpRequestWrapper.get(url, null, null, true);
    }
    function insertorder(userData) {
      var url = apiUrls.insertorder;
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
      vendorProfile: vendorProfile,
      vendorRegister: vendorRegister,
      logout: logout,
      vendorLogin: vendorLogin,
      brandModel:brandModel,
      issuePrice:issuePrice,
      checkout:checkout,
      allorders:allorders,
      allusers:allusers,
      myorders: myorders,
      status: status,
      allmobiletypes: allmobiletypes,
      insertorder: insertorder

    };
  }

  angular.module('mobifixApp')
    .service('httpDataService', httpDataServiceFn);

})(window.angular);
