controllers.controller('CategoryController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

		var loadClusters = function() {
			var checkedCategories = _.filter($rootScope.categories, function (item) {
				return item.checked;
			});

			var categoryIds = _.map(checkedCategories, function (item) {
				return item.id;
			});

			var data = {
				categories: categoryIds,
				offset: 0,
				limit: 10
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/category_clusters?' + queryString;

			$http.get(url)
				.success(function (data) {
					$scope.clusters = data;
				});
		}

		loadClusters();

		$scope.$watch('categories', function(oldValue, newValue){
			if (oldValue != newValue && oldValue)
			{
				loadClusters();
			}
		}, true);
    }])