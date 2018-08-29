(function(angular){
  'use strict';


  function httpRequestWrapperConstructor($http){

    function createRequestObject(method, url, data, query, header, authRequired) {
      var requestObject={};

        requestObject.method = method;

        requestObject.url = url;

        requestObject.data=data;

        if ( query && query.ignoreLoadingBar ) {
          requestObject.ignoreLoadingBar = true;
          delete query['ignoreLoadingBar'];
        }

        if(query) {
          var qs=queryString.stringify(query);
          if ( requestObject.url.indexOf('?') > 0 ) {
            requestObject.url = requestObject.url+'&'+qs;
          } else {
            requestObject.url = requestObject.url+'?'+qs;
          }
        }

        if(header) {
          requestObject.headers=header;
        }

        if(authRequired) {
          requestObject.authRequired=true;
        }

        return(requestObject);

    }


    function post(url,data,query,header,authRequired){

        var requestObject = createRequestObject('POST', url, data, query, header, authRequired);
        return $http(requestObject);

    }


    function put(url,data,query,header,authRequired){

      var requestObject = createRequestObject('PUT', url, data, query, header, authRequired);
      return $http(requestObject);
    }


    function get(url,query,header,authRequired){

        var requestObject = createRequestObject('GET', url, undefined, query, header, authRequired);
        return $http(requestObject);
    }


    function deleteRequest(url,query,header,authRequired){

        var data = '';
        if(!header) {
          header = {"content-Type": "application/json"};
        } else {
          header["content-Type"] = "application/json"
        }
        var requestObject = createRequestObject('DELETE', url, data, query, header, authRequired);
        return $http(requestObject);
    }

    return{
      post:post,
      get:get,
      put:put,
      "delete":deleteRequest
    };
  }

  angular.module('mobifixApp')
  .service('httpRequestWrapper',httpRequestWrapperConstructor);

})(angular);
