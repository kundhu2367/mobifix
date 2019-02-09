/**
 * @ngdoc function
 * @name mobifixApp.controller:mobileRepairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobileRepairControllerConstructor($scope, $http, httpDataService, $state,$rootScope) {

    var vm = this;
    vm.$state = $state;
    vm.checkedIssues=[];
    

 
    



            function checkout()
            {

              vm.checkoutdata = {
                    allow_repeated_payments:false,
                    amount:vm.totalprice,
                    buyer_name:vm.userData.FullName,
                    purpose:"mobilerepair",
                    redirect_url:"http://mobfix.co.in/#/mobilerepair",
                    phone:vm.userData.ContactNumber,
                    send_email:true,
                    webhook:"http://www.mobfix.co.in/webhook",
                    send_sms:true,
                    email:vm.userData.LoginId
               }
               httpDataService.checkout(vm.checkoutdata).then(function(resposeObj){
                if(resposeObj.status == 200){

                  vm.checkoutinfo = response.data;
      

                    $('#ordersuccesful').show();
                   
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
                  
                    $('#ordernotsuccesful').show();
                   
                }
              else if(resposeObj.status == 201) {
                    // Error Scenarios
                  window.location=resposeObj.data.payment_request.longurl;
                    $('#ordernotsuccesful').show();
                   
                }
            });


            }
     

       httpDataService.allmobiletypes().then(function(resposeObj){
                 $scope.brand = resposeObj.data;

        $scope.selectedItemChanged = function (item) {

          vm.slectedBrand = {
                MobileCompanyID : item.MobileCompanyID
              
            }

            httpDataService.brandModel(vm.slectedBrand).then(function(resposeObj){
                if(resposeObj.status == 200){
              $scope.model=resposeObj.data;


              }
            });
            }

        $scope.selectedModelItemChanged = function (item) {
          vm.slectedModel = {
                MobileVerTypeID : item.MobileVersionTypeID
              
            }

            httpDataService.issuePrice(vm.slectedModel).then(function(resposeObj){
                if(resposeObj.status == 200){
              $scope.issueprice=resposeObj.data;


              }
            });
            }



   });

    function priceCalculation()
   {
    vm.totalprice=0;
    vm.issueDetails=$scope.issueprice;

    for (var i = 0; i < vm.issueDetails.length; i++){

      if (vm.issueDetails[i].checked) {

vm.totalprice+= vm.issueDetails[i].FinalCost;
      }
    }


    vm.totalprice;     

  }
 
    vm.checkout = checkout;
    vm.priceCalculation=priceCalculation;
    vm.userData=$rootScope.userData;
   // vm.app = 'Mobifix';
    
  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
