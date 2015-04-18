app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
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
