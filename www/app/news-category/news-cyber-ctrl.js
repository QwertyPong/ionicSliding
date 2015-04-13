(function () {
    'use strict';

    angular.module('cisoApp').controller('NewsCyberCtrl', ['$state', '$scope' ,'newsApi', NewsCyberCtrl]);

    function NewsCyberCtrl($state, $scope, newsApi) {
        var vm = this;

        newsApi.getNewsCyber().then(function(data){
            vm.newsCyber = data;
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