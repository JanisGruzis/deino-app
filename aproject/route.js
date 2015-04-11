app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
			when('/', {
				templateUrl: 'templates/articles.html',
				controller: 'articles'
			}).
			otherwise({
				redirectTo: '/'
			});
    }
]);
