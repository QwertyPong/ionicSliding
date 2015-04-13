(function () {
    'use strict';

    angular.module('cisoApp').controller('NewsSearchCtrl', ['$state', '$scope' ,'newsApi', '$http',NewsSearchCtrl]);

    function NewsSearchCtrl($state, $scope, newsApi, $http) {


        var vm = this;

        newsApi.getNewsSearch().then(function(data){
            vm.newsSearch = data;
        });

        vm.selectNews = function(id){
            newsApi.setNewsId(id);
            $state.go("app.news-detail");
        }

        vm.convertHtml = function(val) {
            return $scope.konten = val;
        }


    };

})();