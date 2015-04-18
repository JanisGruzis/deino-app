controllers.controller('CategoryController', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {
        $scope.category = $routeParams.category;
        var url = 'http://api.deino.clevercode.lv/api/category_clusters?categories[]='
            + $routeParams.category + '&offset=0&limit=10';
        $http.get(url)
            .success(function (data) {
                $scope.clustArticles = data;
            });
    }])