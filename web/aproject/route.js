app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/query', {
                templateUrl: 'templates/query.html',
                controller: 'QueryController'
            }).
            when('/category/:category', {
                templateUrl: 'templates/category.html',
                controller: 'CategoryController'
            }).
            when('/', {
                templateUrl: 'templates/article.html',
                controller: 'ArticleController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);
