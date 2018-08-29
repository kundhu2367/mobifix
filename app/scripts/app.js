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

  .config(function ($httpProvider) {
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

  .constant('BASE_STATE_NAME', 'base')
  .constant('LOGIN_STATE_NAME', 'login')
  .constant('DASHBOARD_STATE_NAME', 'dashboard')
  .constant('HOME_STATE_NAME', 'home')

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, BASE_STATE_NAME,
    LOGIN_STATE_NAME, DASHBOARD_STATE_NAME, ACCOUNTS_STATE_NAME, ACCOUNT_ID_STATE_NAME, BLACKLIST_STATE_NAME) {

    // This is a server file code
    // app.get("*", function(req, res) {
    //     res.render("./index.html");
    // }

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.when('/', '/home');
    $urlRouterProvider.otherwise('/login');

    var baseStateConfig = {
      abstract: true,
      url: "",
      templateUrl: "views/base.html"
    };
    var loginStateConfig = {
      url: "/login",
      parent: BASE_STATE_NAME,
      templateUrl: "views/login.html",
      controller: 'loginCtrl',
      controllerAs: 'login',
      data: {
        requireLogin: false
      }
    };
    var dashboardStateConfig = {
      url: "/",
      parent: BASE_STATE_NAME,
      templateUrl: "views/dashboard.html",
      controller: 'dashboardCtrl',
      controllerAs: 'dashboard',
      data: {
        requireLogin: true
      }
    };
    var homeStateConfig = {
      url: "home",
      parent: DASHBOARD_STATE_NAME,
      templateUrl: "views/home.html",
      controller: 'homeCtrl',
      controllerAs: 'home',
      data: {
        requireLogin: true
      }
    };

    $stateProvider
    .state(BASE_STATE_NAME, baseStateConfig)
    .state(LOGIN_STATE_NAME, loginStateConfig)
    .state(DASHBOARD_STATE_NAME, dashboardStateConfig)
    .state(HOME_STATE_NAME, homeStateConfig)
  })

  .run(function ($rootScope, $state, Notification) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      $rootScope.currentUser = localStorage.getItem("currentUser");
      Notification.clearAll();
      if (requireLogin && (typeof $rootScope.currentUser === 'undefined' || $rootScope.currentUser === null)) {
        event.preventDefault();
        $state.go('login');
      }
    });

  });

