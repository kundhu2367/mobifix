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
    

 
    



            //function checkout()
            //{
            //  vm.userData= $rootScope.userData[0];
            //  vm.checkoutdata = {
            //        allow_repeated_payments:false,
            //        amount:vm.totalprice,
            //        buyer_name:vm.userData.FirstName,
            //        purpose:"mobilerepair",
            //        redirect_url:"http://mobfix.co.in/#/mobilerepair",
            //        phone:vm.userData.ContactNumber,
            //        send_email:true,
            //        webhook:"http://www.mobfix.co.in/webhook",
            //        send_sms:true,
            //        email:vm.userData.LoginId
            //   }
            //   httpDataService.checkout(vm.checkoutdata).then(function(resposeObj){
            //    if(resposeObj.status == 200){

            //      vm.checkoutinfo = response.data;
      

            //        $('#ordersuccesful').show();
                   
            //    } else if(resposeObj.status == 404) {
            //        // Error Scenarios
                  
            //        $('#ordernotsuccesful').show();
                   
            //    }
            //  else if(resposeObj.status == 201) {



                              vm.insertorderdata = {

                UserType: 1,
                LoginId: "akhilavooturi123@gmail.com",
                Password: "abc456", //remove password field from frontend and backend
                NoOfAttempts: 2, //remove
                LastLoginDate: "NOW()",
                UserStatus: "B", //remove
                CreatedDate: "NOW()",
                CrearedBy: 1,
                LastUpdateDate: "NOW()",
                LastUpdateBy: 1,
                AssignedtoVendorID: 2, //reomve
                IssuesTypeID: 6,
                IssueDetails: "screen damage",
                IEMI: "abc1253645765",
                MobileCompID: 3,
                MobileVersionTypeID: 4,
                CustDemoID: 2,
                ContactAddrID: 2,
                ContactPhoneID: 5,
                InitialQuote: "900.00",
                                EstimatedQuote: "900.00",
                                FinalCost: "100.00",
                OrderPlacedDate: "NOW()", 
                EstimatedTimetoDeliver: "NOW()" //change
              }

                httpDataService.insertorder(vm.insertorderdata).then(function (resposeObj) {
                if (resposeObj.status == 200) {
                  $("#ordersuccess").show();
                }
                else if (resposeObj.status == 404) {
                  $("#orderfailure").show();
                }
                });



                    // Error Scenarios
               //   window.location=resposeObj.data.payment_request.longurl;
                    
                   
             //  }
          //  });


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
   
   // vm.app = 'Mobifix';
    
//}
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
