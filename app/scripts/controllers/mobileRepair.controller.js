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
    vm.userData = $rootScope.userData[0];
            function checkout()
            {
              vm.insertorderdata = {

                UserType: 1,
                LoginId: "rezamohd@gmail.com",
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
                FinalCost: "1000.00",
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

            //  vm.checkoutdata = {
            //        allow_repeated_payments:false,
            //        amount:10,
            //        buyer_name:"santosh",
            //        purpose:"fifa",
            //        redirect_url:"http://mobfix.co.in/#/mobilerepair",
            //        phone:9652930617,
            //        send_email:true,
            //        webhook:"http://www.mobfix.co.in/webhook",
            //        send_sms:true,
            //        email:"santosh132456@gmail.com"
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
            //        // Error Scenarios
            //      window.location=resposeObj.data.payment_request.longurl;
            //        $('#ordernotsuccesful').show();
                   
            //    }
            //});


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
 
    vm.checkout = checkout;
    vm.eduToEdit = {};
    vm.eduToEdit.test = false;
   // vm.app = 'Mobifix';
    
  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
