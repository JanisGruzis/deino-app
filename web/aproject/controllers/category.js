controllers.controller('CategoryController', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

		var offset = 0;
		var limit = 10;
		$scope.clusters = [];
		var loading = false;

		var loadClusters = function() {
			loading = true;
			var checkedCategories = _.filter($rootScope.categories, function (item) {
				return item.checked;
			});

			var categoryIds = _.map(checkedCategories, function (item) {
				return item.id;
			});

			var data = {
				categories: categoryIds,
				offset: offset,
				limit: limit
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/category_clusters?' + queryString;

			$http.get(url)
				.success(function (data) {
					loading = false;
					data = _.toArray(data);
					$scope.clusters = $scope.clusters.concat(data);
					if (data.length > 0)
					{
						offset += limit;
					}
				})
				.error(function(){
					loading = false;
				})
			;
		};

		$scope.loadClusters = loadClusters;
		if (!loading) {
			loadClusters();
		}

		/**
		 * When content scrolled to bottom load data.
		 */
		$rootScope.loadedBottom = function(){
			if (!loading)
			{
				loadClusters();
			}
		};

		$scope.$watch('categories', function(newValue, oldValue){
			if (oldValue != newValue && oldValue)
			{
				$scope.clusters = [];
				offset = 0;
				loadClusters();
			}
		}, true);
    }])