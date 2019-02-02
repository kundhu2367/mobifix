'use strict';

/**
 * @ngdoc overview
 * @name mobifixApp
 * @description
 * # mobifixApp
 *
 * Main module of the application.
 */
angular
    .module('mobifixApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'base64',
        'ui-notification'
    ])

.config(function($httpProvider) {
    $httpProvider.useLegacyPromiseExtensions = false;
    $httpProvider.interceptors.push('authInterceptor');
})

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.spinnerTemplate = '<div class="screen-lock"><div class="spinner"><i class="fa fa-spinner fa-pulse"></i></div></div>';
    cfpLoadingBarProvider.includeBar = false;
}])

.config(['NotificationProvider', function(NotificationProvider) {
    NotificationProvider.setOptions({
        delay: null,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top',
        templateUrl: "custom_template.html"
    });
}])

    .constant('DASHBOARD_STATE_NAME', 'dashboard')
    .constant('HOME_STATE_NAME', 'home')
    .constant('ABOUT_STATE_NAME', 'about')
    .constant('BLOG_STATE_NAME', 'blog')
    .constant('BOOKONLINE_STATE_NAME', 'bookOnline')
    .constant('CONTACTUS_STATE_NAME', 'contactUs')
    .constant('REPAIR_STATE_NAME', 'repair')
    .constant('STATUS_STATE_NAME', 'status')
    .constant('PRODUCTDETAILSFORM_STATE_NAME', 'productdetailsform')
    .constant('RESETPASSWORD_STATE_NAME', 'resetPassword')
  .constant('LOGIN_STATE_NAME', 'login')
  .constant('REGISTER_STATE_NAME','register')
    .constant('ALLUSERS_STATE_NAME', 'allUsers')
    .constant('ALLVENDORS_STATE_NAME', 'allVendors')
    .constant('USERPROFILE_STATE_NAME', 'userProfile')
    .constant('VENDORPROFILE_STATE_NAME', 'vendorProfile')
  .constant('MOBILEREPAIR_STATE_NAME', 'mobileRepair')
  .constant('VENDORREGISTER_STATE_NAME','vendorRegister')
.config(function($stateProvider, $urlRouterProvider, $locationProvider, ABOUT_STATE_NAME,
    DASHBOARD_STATE_NAME, HOME_STATE_NAME, BLOG_STATE_NAME, BOOKONLINE_STATE_NAME, CONTACTUS_STATE_NAME, REPAIR_STATE_NAME,
  STATUS_STATE_NAME, VENDORREGISTER_STATE_NAME, PRODUCTDETAILSFORM_STATE_NAME, REGISTER_STATE_NAME, ALLUSERS_STATE_NAME, ALLVENDORS_STATE_NAME, USERPROFILE_STATE_NAME, VENDORPROFILE_STATE_NAME, MOBILEREPAIR_STATE_NAME) {

    // This is a server file code
    // app.get("*", function(req, res) {
    //     res.render("./index.html");
    // }

    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    // $urlRouterProvider.when('/', '/');
    $urlRouterProvider.otherwise('/');

    var dashboardStateConfig = {
        templateUrl: "views/dashboard.html",
        controller: 'dashboardCtrl',
        controllerAs: 'dashboard',
        data: {
            requireLogin: false
        }
    };
    var homeStateConfig = {
        url: "/",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/home.html",
        controller: 'homeCtrl',
        controllerAs: 'home',
        data: {
            requireLogin: false
        }
    };
    var aboutStateConfig = {
        url: "/about",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/about.html",
        controller: 'aboutCtrl',
        controllerAs: 'about',
        data: {
            requireLogin: false
        }
    };

    var blogStateConfig = {
        url: "/blog",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/blog.html",
        controller: 'blogCtrl',
        controllerAs: 'blog',
        data: {
            requireLogin: false
        }
    };


    var bookOnlineStateConfig = {
        url: "/bookOnline",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/bookOnline.html",
        controller: 'bookOnlineCtrl',
        controllerAs: 'bookOnline',
        data: {
            requireLogin: false
        }
    };

    var contactUsStateConfig = {
        url: "/contactUs",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/contactUs.html",
        controller: 'contactUsCtrl',
        controllerAs: 'contactUs',
        data: {
            requireLogin: false
        }
    };

    var productDetailsFormStateConfig = {
        url: "/productdetailsform",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/productDetailsForm.html",
        controller: 'productDetailsFormCtrl',
        controllerAs: 'productDetailsForm',
        data: {
            requireLogin: false
        }
    };

    var repairStateConfig = {
        url: "/repair",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/repair.html",
        controller: 'repairCtrl',
        controllerAs: 'repair',
        data: {
            requireLogin: false
        }
    };

  var mobilerepairStateConfig = {
    url: "/mobilerepair",
    parent: DASHBOARD_STATE_NAME,
    templateUrl: "views/mobileRepair.html",
    controller: 'mobilerepairCtrl',
    controllerAs: 'mobilerepair',
    data: {
      requireLogin: false
    }
  };

    var statusStateConfig = {
        url: "/status",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/status.html",
        controller: 'statusCtrl',
        controllerAs: 'status',
        data: {
            requireLogin: false
        }
    };

    var allUsersStateConfig = {
        url: "/allUsers",
        parent: DASHBOARD_STATE_NAME,
        templateUrl: "views/allUsers.html",
        controller: 'allUsersCtrl',
        controllerAs: 'vm',
        data: {
            requireLogin: false
        }
    };
  var allVendorsStateConfig = {
    url: "/allVendors",
    parent: DASHBOARD_STATE_NAME,
    templateUrl: "views/allVendors.html",
    controller: 'allVendorsCtrl',
    controllerAs: 'vm',
    data: {
      requireLogin: false
    }
  };
    var userProfileStateConfig = {
    url: "/userProfile",
    parent: DASHBOARD_STATE_NAME,
    templateUrl: "views/userProfile.html",
    controller: 'userProfileCtrl',
    controllerAs: 'vm',
    data: {
      requireLogin: true
    }
    };
  var vendorRegisterStateConfig = {
    url: "/vendorRegister",
    parent: DASHBOARD_STATE_NAME,
    templateUrl: "views/vendorRegister.html",
    controller: 'vendorRegisterCtrl',
    controllerAs: 'vm',
    data: {
      requireLogin: true
    }
  };
    var vendorProfileStateConfig = {
    url: "/vendorProfile",
    parent: DASHBOARD_STATE_NAME,
    templateUrl: "views/vendorProfile.html",
    controller: 'vendorProfileCtrl',
    controllerAs: 'vm',
    data: {
      requireLogin: true
    }
  };

    $stateProvider
        .state(DASHBOARD_STATE_NAME, dashboardStateConfig)
        .state(HOME_STATE_NAME, homeStateConfig)
        .state(ABOUT_STATE_NAME, aboutStateConfig)
        .state(BLOG_STATE_NAME, blogStateConfig)
        .state(BOOKONLINE_STATE_NAME, bookOnlineStateConfig)
        .state(CONTACTUS_STATE_NAME, contactUsStateConfig)
        .state(REPAIR_STATE_NAME, repairStateConfig)
        .state(STATUS_STATE_NAME, statusStateConfig)
        .state(PRODUCTDETAILSFORM_STATE_NAME, productDetailsFormStateConfig)
        .state(ALLUSERS_STATE_NAME, allUsersStateConfig)
        .state(ALLVENDORS_STATE_NAME, allVendorsStateConfig)
        .state(USERPROFILE_STATE_NAME, userProfileStateConfig)
        .state(VENDORPROFILE_STATE_NAME, vendorProfileStateConfig)
      .state(MOBILEREPAIR_STATE_NAME, mobilerepairStateConfig)
      .state(VENDORREGISTER_STATE_NAME, vendorRegisterStateConfig)
})

.run(function($rootScope, $state, Notification) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;
        // $rootScope.currentUser = localStorage.getItem("currentUser");
        // Notification.clearAll();
        if (requireLogin && (typeof $rootScope.userData === 'undefined' || $rootScope.userData === null)) {
          event.preventDefault();
          $state.go('home');
        }
    });

});
