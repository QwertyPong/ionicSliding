(function() {
    'use strict';

    angular.module('cisoApp').controller('NewsCommentCtrl', ['$scope', '$http', 'newsApi', NewsCommentCtrl]);

    function NewsCommentCtrl($scope, $http, newsApi) {
        var vm = this;

        vm.loadList = function(forceRefresh) {
            newsApi.getNewsData(forceRefresh).then(function(data) {

                $scope.Title = data.title;
                $scope.convertContent = data.excerpt;
                
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        }; 

        vm.loadList(false);

        //=========================================================
        // var comments = [
        //     {
        //         id: 1, 
        //         text: 'Komen dong'
        //     },
        //     {
        //         id: 2, 
        //         text: 'Sudah dong'
        //     }
        // ];

        // init();

        // function init() {
        //     $scope.comments = commentService.getComments();
        // }

        // $scope.insertComments = function () {
        //     var text = $scope.newComment.text;
        //     commentService.insertComments(text);
        //     $scope.newComment.text = '';
        // };

        //=========================================================
        $http.post('/#/app/news-detail/', {
            text:'abcd'
        },
        {
            params: {
                id:'5'
            }
        });

    };

})();