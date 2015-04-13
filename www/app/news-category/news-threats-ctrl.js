(function () {
    'use strict';

    angular.module('cisoApp').controller('NewsThreatsCtrl', ['$state', '$scope' ,'newsApi', NewsThreatsCtrl]);

    function NewsThreatsCtrl($state, $scope, newsApi) {
        var vm = this;

        newsApi.getNewsThreats().then(function(data){
            vm.newsThreats = data;
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