(function() {
    'use strict';

    angular.module('cisoApp').factory('newsApi', ['$http', '$q', '$ionicLoading', 'DSCacheFactory', newsApi]);

    function newsApi($http, $q, $ionicLoading, DSCacheFactory) {


        self.newsCache = DSCacheFactory.get("newsCache");
        self.newsDataCache = DSCacheFactory.get("newsDataCache");

        // CATERGORY
        self.newsCyberCache = DSCacheFactory.get("newsCyberCache");
        self.newsPrivacyCache = DSCacheFactory.get("newsPrivacyCache");
        self.newsThreatsCache = DSCacheFactory.get("newsThreatsCache");

        self.newsCache.setOptions({
            onExpire: function (key, value) {
                getNews()
                    .then(function () {
                        console.log("News Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.newsCache.put(key, value);
                    });
            }
        });

        self.newsDataCache.setOptions({
            onExpire: function (key, value) {
                getNewsData()
                    .then(function () {
                        console.log("News Data Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.newsDataCache.put(key, value);
                    });
            }
        });

        self.newsCyberCache.setOptions({
            onExpire: function (key, value) {
                getNewsCyber()
                    .then(function () {
                        console.log("News Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.newsCyberCache.put(key, value);
                    });
            }
        });

        self.newsPrivacyCache.setOptions({
            onExpire: function (key, value) {
                getNewsPrivacy()
                    .then(function () {
                        console.log("News Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.newsPrivacyCache.put(key, value);
                    });
            }
        });

        self.newsThreatsCache.setOptions({
            onExpire: function (key, value) {
                getNewsThreats()
                    .then(function () {
                        console.log("News Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.newsThreatsCache.put(key, value);
                    });
            }
        });

        self.staticCache = DSCacheFactory.get("staticCache");

        function setNewsId(newsId){
            self.staticCache.put("currentNewsId", newsId);
        }

        function getNewsId(){
            var id = self.staticCache.get("currentNewsId");
            console.log("in get newsid", id);
            return id;
        }

        // CATEGORY - ALL
        function getNews() {
            var deferred = $q.defer(),
                cacheKey = "news",
                newsData = self.newsCache.get(cacheKey);

            if (newsData) {
                console.log("Found data inside cache", newsData);
                deferred.resolve(newsData);
            } else {
                $http.get("http://www.safiahijab.com/wp-json/posts/")
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.newsCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        // CATEGORY - CYBERCRIME
        function getNewsCyber() {
            var deferred = $q.defer(),
                cacheKey = "news",
                newsData = self.newsCyberCache.get(cacheKey);

            if (newsData) {
                console.log("Found data inside cache", newsData);
                deferred.resolve(newsData);
            } else {
                $http.get("http://www.safiahijab.com/wp-json/posts?filter[cat]=16")
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.newsCyberCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        // CATEGORY - PRIVACY
        function getNewsPrivacy() {
            var deferred = $q.defer(),
                cacheKey = "news",
                newsData = self.newsPrivacyCache.get(cacheKey);

            if (newsData) {
                console.log("Found data inside cache", newsData);
                deferred.resolve(newsData);
            } else {
                $http.get("http://www.safiahijab.com/wp-json/posts?filter[cat]=14")
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.newsPrivacyCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        // CATEGORY - THREATS
        function getNewsThreats() {
            var deferred = $q.defer(),
                cacheKey = "news",
                newsData = self.newsThreatsCache.get(cacheKey);

            if (newsData) {
                console.log("Found data inside cache", newsData);
                deferred.resolve(newsData);
            } else {
                $http.get("http://www.safiahijab.com/wp-json/posts?filter[cat]=10")
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.newsThreatsCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        // NEWS DETAIL
        function getNewsData(forceRefresh) {
            if (typeof forceRefresh === "undefined") { forceRefresh = false; }

            var deferred = $q.defer(),
                cacheKey = "newsData-" + getNewsId(),
                newsData = null;

            if (!forceRefresh) {
                newsData = self.newsDataCache.get(cacheKey);
            };

            if (newsData) {
                console.log("Found data in cache", newsData);
                deferred.resolve(newsData);
            } else {
                $ionicLoading.show({
                    template: 'Loading...'
                });

                $http.get("http://www.safiahijab.com/wp-json/posts/" + getNewsId())
                    .success(function(data, status) {
                        console.log("Received schedule data via HTTP.", data, status);
                        self.newsDataCache.put(cacheKey, data);
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        $ionicLoading.hide();
                        deferred.reject();
                    });
            }
            return deferred.promise;
        };

        return {
            getNews: getNews,
            getNewsData: getNewsData,
            getNewsCyber: getNewsCyber,
            getNewsPrivacy: getNewsPrivacy,
            getNewsThreats: getNewsThreats,
            setNewsId: setNewsId
        };
    };
})();