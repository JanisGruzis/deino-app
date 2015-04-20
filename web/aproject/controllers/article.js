controllers.controller('ArticleController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {
        /**
         * Load categorized cluster articles.
         */
        var url = 'http://api.deino.clevercode.lv/api/articles_by_category';
        $http.get(url)
            .success(function (data) {
                $scope.catClustArticles = data;


            });
        var popular_url = 'http://api.deino.clevercode.lv/api/popular';
        $http.get(popular_url)
            .success(function (popular_raw) {
                var popular_articles = [];
                for (var i in popular_raw) {
                    popular_articles = popular_articles.concat(popular_raw[i]);
                }
                $scope.populars = popular_articles;
            });
    }]);

