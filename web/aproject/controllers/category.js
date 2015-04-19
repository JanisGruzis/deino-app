controllers.controller('CategoryController', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {

		var offset = 0;
		var limit = 9;
		var clusters = [];
		var loading = false;

		$scope.category = $routeParams.category;

		var loadClusters = function() {
			loading = true;

			var data = {
				categories: [$routeParams.category],
				offset: offset,
				limit: limit
			};

			var queryString = $.param(data);

			var url = 'http://api.deino.clevercode.lv/api/category_clusters?' + queryString;

			$http.get(url)
				.success(function (data) {
					loading = false;
					data = _.toArray(data);
					clusters = clusters.concat(data);
					if (data.length > 0)
					{
						offset += limit;
					}

					$scope.chunks = _.chain(clusters)
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
		};
		$scope.loadClusters = loadClusters;

		if (!loading) {
			loadClusters();
		}

		$('.app-content').parent().on('scroll', function(e){
			var elem = $(e.currentTarget);
			if (elem[0].scrollHeight - elem.scrollTop() - elem.outerHeight() < 10)
			{
				if (!loading)
				{
					loadClusters();
				}
			}
		});
    }])