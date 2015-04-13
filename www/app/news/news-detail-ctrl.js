(function() {
    'use strict';

    angular.module('cisoApp').controller('NewsDetailCtrl', ['$scope', 'newsApi', NewsDetailCtrl]);

    function NewsDetailCtrl($scope, newsApi) {
        var vm = this;
        $scope.theText = 'orlando default text';

        vm.loadList = function(forceRefresh) {
            newsApi.getNewsData(forceRefresh).then(function(data) {

                $scope.post_title = data.title;
                $scope.post_image = data.featured_image.guid;
                $scope.post_author = data.author.name;
                $scope.convertContent = data.content;
                $scope.post_date = data.date;
                $scope.post_link = data.link;
                
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        }; 

        vm.loadList(false);
        
        $scope.share = function(){
            window.plugins.socialsharing.share($scope.post_title, null, $scope.post_image, $scope.post_link);
        }
    };
})();