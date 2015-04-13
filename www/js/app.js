// Ionic Starter App
'use strict';

angular.module('cisoApp', ['ionic', 'angular-data.DSCacheFactory', 'ngCordova'])

.run(function($ionicPlatform, DSCacheFactory, $rootScope, $location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // NEWS
    DSCacheFactory("newsDataCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsCyberCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsPrivacyCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsThreatsCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsSocmedCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsCorporateCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsGovernmentCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsEventCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("newsBusinessCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });

    //SEARCH
    DSCacheFactory("newsSearchCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });

    // MAGAZINE
    DSCacheFactory("magazineDataCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("magazineCache", { storageMode: "localStorage", maxAge: 360000, deleteOnExpire: "aggressive" });
    DSCacheFactory("staticCache", { storageMode: "localStorage" });



  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/menu/content.html"
  })

  .state('app.news', {
    url: '/news',
    views: {
      'content': {
        templateUrl: 'app/news/news.html'
      }
    }
  })

  .state('app.news-detail', {
    url: '/news/:id',
    views: {
      'content': {
        templateUrl: 'app/news/news-detail.html'
      }
    }
  })

  .state('app.news-comment', {
    url: '/news/:id',
    views: {
      'content': {
        templateUrl: 'app/news/news-comment.html'
      }
    }
  })

  .state('app.news-cybercrime', {
    url: '/news/cybercrime',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-cyber.html'
      }
    }
  })

  .state('app.news-corporate', {
    url: '/news/corporate',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-corporate.html'
      }
    }
  })

  .state('app.news-event', {
    url: '/news/event',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-event.html'
      }
    }
  })

  .state('app.news-privacy', {
    url: '/news/privacy',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-privacy.html'
      }
    }
  })

  .state('app.news-threats', {
    url: '/news/threats',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-threats.html'
      }
    }
  })

  .state('app.news-socmed', {
    url: '/news/socialmedia',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-socmed.html'
      }
    }
  })

  .state('app.news-government', {
    url: '/news/government',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-government.html'
      }
    }
  })

  .state('app.news-business', {
    url: '/news/business',
    views: {
      'content': {
        templateUrl: 'app/news-category/news-business.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/news');
});