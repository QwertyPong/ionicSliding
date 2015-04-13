(function () {
    'use strict';

    angular.module('cisoApp').controller('NewsCtrl', ['$state', '$scope' , '$document','newsApi', NewsCtrl]);

    function NewsCtrl($state, $scope, $document, newsApi) {
        var vm = this;
        $scope.date = new Date();


        newsApi.getNews().then(function(data){
            vm.news = data;

            for (var i = 1; i <= 10; i++) {
                for (var j = 1; j <= 2; j++) {
                  var c = (i + j)-2;
                }
            }
        });

        vm.selectNews = function(id){
            newsApi.setNewsId(id);
            $state.go("app.news-detail");
        }

        vm.convertHtml = function(val) {
            return $scope.konten = val;
        }

        $scope.toggleTopMenu = function () {
            var menu = document.getElementsByTagName('ion-top-menu')[0];
            var pane = document.getElementsByTagName('ion-pane')[0];
            menu.style.height = pane.style.top = (menu.offsetHeight==0)?'100%':'0px';
        };
    };
})();