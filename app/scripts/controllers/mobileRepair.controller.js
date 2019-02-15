/**
 * @ngdoc function
 * @name mobifixApp.controller:mobileRepairCtrl
 * @description
 * # repairCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function mobileRepairControllerConstructor($scope, $http, httpDataService, $state, $rootScope, commonModal) {

    var vm = this;
    vm.$state = $state;
    vm.checkedIssues = [];
    $('#ordersuccess').hide();
      $('#orderfailure').hide();
      $('#couponFailure').hide()
      $('#couponSuccess').hide()


    function checkout() {

      $rootScope.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if ($rootScope.currentUser) {
        vm.userData = $rootScope.userData[0];
        // vm.checkoutdata = {
        //   allow_repeated_payments: false,
        //   amount: vm.totalprice,
        //   buyer_name: vm.userData.FirstName,
        //   purpose: "mobilerepair",
        //   redirect_url: "http://mobfix.co.in/#/mobilerepair",
        //   phone: vm.userData.ContactNumber,
        //   send_email: false,
        //   webhook: "http://www.mobfix.co.in/webhook",
        //   send_sms: false,
        //   email: vm.userData.LoginId
        // }
        // httpDataService.checkout(vm.checkoutdata).then(function (resposeObj) {
        //   if (resposeObj.status == 200) {

        //     vm.checkoutinfo = response.data;


        //     $('#ordersuccesful').show();

        //   } else if (resposeObj.status == 404) {
        //     // Error Scenarios

        //     $('#ordernotsuccesful').show();

        //   } else if (resposeObj.status == 201) {


            vm.insertorderdata = {

              UserType: 1,
              LoginId: vm.userData.LoginId,
              //Password: "abc456", //remove password field from frontend and backend
              NoOfAttempts: 2, //remove
              LastLoginDate: "NOW()",
              UserStatus: "B", //remove
              CreatedDate: "NOW()",
              CrearedBy: 1,
              LastUpdateDate: "NOW()",
              LastUpdateBy: 1,
              AssignedtoVendorID: "", //reomve
              IssuesTypeID: vm.phoneissueid,
              IssueDetails: vm.phoneissues,
              IEMI: "",
              MobileCompID: vm.slectedBrand.MobileCompanyID,
              MobileVersionTypeID: vm.slectedModel.MobileVerTypeID,
              CustDemoID: "",
              ContactAddrID: "",
              ContactPhoneID:vm.userData.ContactNumber,
              InitialQuote: "",
              EstimatedQuote: "",
              FinalCost: vm.totalprice,
              OrderPlacedDate: "NOW()",
              EstimatedTimetoDeliver: "NOW()" //change
            }

            httpDataService.insertorder(vm.insertorderdata).then(function (resposeObj) {
              if (resposeObj.status == 200) {
                $("#ordersuccess").show();
              } else if (resposeObj.status == 404) {
                $("#orderfailure").show();
              }
            });


            // Error Scenarios
            //window.location = resposeObj.data.payment_request.longurl;


         
        // });
          }
      else {


        var commonResolves = commonModal.commonResolves({});
        var resolveAttributes = {
          resolve: angular.extend(commonResolves.accountData)
        };
        var modalCallBack = function () {

        };
        var modalDismissCallBack = function () { };
        commonModal.openModal('loginModal', resolveAttributes, modalCallBack, modalDismissCallBack);

      }
    }


    httpDataService.allmobiletypes().then(function (resposeObj) {
      $scope.brand = resposeObj.data;

      $scope.selectedItemChanged = function (item) {

        vm.slectedBrand = {
          MobileCompanyID: item.MobileCompanyID

        }
        
        httpDataService.brandModel(vm.slectedBrand).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $scope.model = resposeObj.data;


          }
        });
      }

      $scope.selectedModelItemChanged = function (item) {
        vm.slectedModel = {
          MobileVerTypeID: item.MobileVersionTypeID

        }

        httpDataService.issuePrice(vm.slectedModel).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $scope.issueprice = resposeObj.data;


          }
        });
      }


    });


function couponValidation()
{
      if(vm.finalcoupon=="Launch Special" || vm.finalcoupon=="LaunchSpecial" || vm.finalcoupon=="launchspecial" || vm.finalcoupon=="LAUNCHSPECIAL" )

      {
          $('#couponSuccess').show()
          vm.finaldiscount=vm.totalprice*.30;
          vm.grandtotal=vm.totalprice-vm.finaldiscount;
      }
      else{
$('#couponFailure').show()
      }

}

    function priceCalculation() {
      vm.totalprice = 0;
      vm.issueDetails = $scope.issueprice;
      vm.phoneissues="";
      vm.phoneissueid="";
      for (var i = 0; i < vm.issueDetails.length; i++) {

        if (vm.issueDetails[i].checked) {

          vm.totalprice += vm.issueDetails[i].FinalCost;
          vm.phoneissues += ((vm.phoneissues ? ',' : '') + vm.issueDetails[i].MobileIssue);
          vm.phoneissueid += ((vm.phoneissueid ? ',' : '') +vm.issueDetails[i].MobileIssuePriceID);
        }
      }

      vm.phoneissueid;
      vm.phoneissues;
      vm.totalprice;
      

    }

    vm.checkout = checkout;
    vm.priceCalculation = priceCalculation;
    vm.couponValidation=couponValidation;
    //vm.openloginModal = openloginModal;

    // vm.app = 'Mobifix';

  }
  angular.module('mobifixApp')
    .controller('mobilerepairCtrl', mobileRepairControllerConstructor);

})(angular);