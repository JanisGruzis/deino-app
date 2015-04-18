controllers.controller('CategoryController', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {

		var checkedCategories = _.filter($routeParams.categories, function(item){
			return item.checked;
		});

		var categoryIds = _.map(checkedCategories, function(item){
			return item.id;
		});

		var data = {
			categories : categoryIds,
			offset : 0,
			limit : 10
		};

		var queryString = $.param(data);

        var url = 'http://api.deino.clevercode.lv/api/category_clusters?' + queryString;

		$http.get(url)
            .success(function (data) {
                $scope.clusters = data;
            });
    }])