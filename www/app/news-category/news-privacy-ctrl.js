(function () {
    'use strict';

    angular.module('cisoApp').controller('NewsPrivacyCtrl', ['$state', '$scope' ,'newsApi', NewsPrivacyCtrl]);

    function NewsPrivacyCtrl($state, $scope, newsApi) {
        var vm = this;

        newsApi.getNewsPrivacy().then(function(data){
            vm.newsPrivacy = data;
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