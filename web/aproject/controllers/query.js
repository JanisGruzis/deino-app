controllers.controller('QueryController', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {
        $scope.category = $routeParams.category;
            var url = 'http://api.deino.clevercode.lv/api/articles?limit=10&offset=&query=Adidas&from=';
        $http.get(url)
            .success(function (data) {
                $scope.queryArticles = data;
            });
    }])