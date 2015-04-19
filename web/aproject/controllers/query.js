controllers.controller('QueryController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

		var offset = 0;
		var limit = 9;
		articles = [];
		var loading = false;

		var loadArticles = function() {
			var sourceIds = _.chain($scope.sources)
				.filter(function (item) {
					return item.checked;
				})
				.map(function (item) {
					return item.id;
				})
				.value();

			var categoryIds = _.chain($scope.categories)
				.filter(function (item) {
					return item.checked;
				})
				.map(function (item) {
					return item.id;
				})
				.value();

			var data = {
				sources: sourceIds,
				categories: categoryIds,
				query: $scope.searchQuery,
				period: $scope.searchPeriod,
				offset: offset,
				limit: limit
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/articles?' + queryString;

			loading = true;
			$http.get(url)
				.success(function (data) {
					loading = false;
					data = _.toArray(data);
					articles = articles.concat(data);
					if (data.length > 0)
					{
						offset += limit;
					}

					$scope.chunks = _.chain(articles)
						.groupBy(function(elem, index) {
							return Math.floor(index/3);
						})
						.toArray()
						.value()
					;
				})
				.error(function(){
					loading = false;
				})
			;
		}

		$http.get('http://api.deino.clevercode.lv/api/sources')
			.success(function (data) {
				$scope.sources = data;
			});

		$scope.searchPeriod = 'all';
		if (!loading)
		{
			loadArticles();
		}

		$('.app-content').parent().on('scroll', function(e){
			var elem = $(e.currentTarget);
			if (elem[0].scrollHeight - elem.scrollTop() - elem.outerHeight() < 10)
			{
				if (!loading)
				{
					loadArticles();
				}
			}
		});

		$rootScope.doSearch = function(){
			if (!loading)
			{
				articles = [];
				offset = 0;
				loadArticles();
			}
		};

		$scope.$watch('searchPeriod', function(newValue, oldValue){
			if (oldValue != newValue)
			{
				if (!loading) {
					articles = [];
					offset = 0;
					loadArticles();
				}
			}
		});

		$scope.$watch('sources', function(newValue, oldValue){
			if (oldValue != newValue)
			{
				if (!loading) {
					articles = [];
					offset = 0;
					loadArticles();
				}
			}
		}, true);

		$scope.$watch('categories', function(newValue, oldValue){
			if (oldValue != newValue)
			{
				if (!loading) {
					articles = [];
					offset = 0;
					loadArticles();
				}
			}
		}, true);
    }]);
