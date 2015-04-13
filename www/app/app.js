// Ionic Starter App
angular.module('cisoApp', ['ionic', 'angular-data.DSCacheFactory'])

.run(function($ionicPlatform, DSCacheFactory) {
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
  })

  // SEARCH
  .state('app.search', {
    url: '/search',
    views: {
      'content': {
        templateUrl: 'app/news/news-search.html'
      }
    }
  })

  // LOGIN
  .state('app.login', {
    url: '/login',
    views: {
      'content': {
        templateUrl: 'app/user/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  // MAGAZINE
  .state('app.magazines', {
      url: "/magazines",
      views: {
        'content': {
          templateUrl: "app/magazines/magazines.html"
        }
      }
    })

    .state('app.magazine-detail', {
      url: "/magazines/:id",
      views: {
        'content': {
          templateUrl: "app/magazines/magazine-detail.html"
        }
      }
    });

  $urlRouterProvider.otherwise('/app/news');
});