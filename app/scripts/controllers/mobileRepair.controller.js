/**
 * @ngdoc function
 * @name mobifixApp.controller:mobileRepairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobileRepairControllerConstructor($scope, $http, httpDataService, $state) {

    var vm = this;
    vm.$state = $state;



            function checkout()
            {

              vm.checkoutdata = {
                    allow_repeated_payments:false,
                    amount:10,
                    buyer_name:"santosh",
                    purpose:"fifa",
                    redirect_url:"http://mobfix.co.in/#/mobilerepair",
                    phone:9652930617,
                    send_email:true,
                    webhook:"http://www.mobfix.co.in/webhook",
                    send_sms:true,
                    email:"santosh132456@gmail.com"
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
 
    vm.checkout = checkout;
    vm.eduToEdit = {};
    vm.eduToEdit.test = false;
   // vm.app = 'Mobifix';
    
  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);
  
})(angular);
