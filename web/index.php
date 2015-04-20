<?php

//load local resource
function llr($file)
{
	echo $file.'?'.filemtime($file);
}

?>
<!doctype html>
<html>
	<head lang="en">
		<meta charset="UTF-8">
		<meta name="viewport"
			  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
		<title>Deino</title>
		<link rel="stylesheet" href="<?php llr("resources/angular-material/angular-material.css");?>"/>
		<link href="<?php llr("resources/angular-carousel/dist/angular-carousel.css");?>" rel="stylesheet" type="text/css"/>
		<!--  <link rel="stylesheet" href="<?php llr("resources/angular-material/theme/blue-theme.css");?>"/> -->
		<link rel="stylesheet" href="<?php llr("resources/bootstrap/dist/css/bootstrap.min.css");?>"/>
		<link rel="stylesheet" href="<?php llr("resources/bootstrap/dist/css/bootstrap-theme.min.css");?>"/>
		<link rel="stylesheet" href="<?php llr("css/style.css");?>"/>
		<!-- <link rel="stylesheet" href="//fonts.googleapis.com/css?family-RobotoDraft:400,500,700,400italic"/> -->
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="<?php llr("resources/font-awesome/css/font-awesome.min.css");?>">
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,100italic,100,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic-ext,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

	</head>
	<body ng-app="deino" ng-controller="BaseController" layout="column" layout-align="top center" ng-cloak class="ng-cloak">
		<md-toolbar>
			<div class="md-toolbar-tools">
				<h2 class="logo" ng-show="!showSearch"><a href="#/">Deino</a></h2>
				<span flex></span>

				<md-button ng-show="showSearch" ng-click="showSearch = !showSearch; gotoStart();" class="md-icon-button">
					<md-icon md-svg-icon="img/ic_close_24px.svg"></md-icon>
				</md-button>

				<md-input-container ng-show="showSearch" class="header-search">
					<input ng-model="searchQuery"
						   type="text"
						/>
				</md-input-container>

				<md-button ng-click="doSearch()" ng-show="showSearch" class="md-icon-button">
					<md-icon md-svg-icon="img/ic_search_24px.svg"></md-icon>
				</md-button>

				<md-button ng-show="!showSearch" ng-click="showSearch = !showSearch; gotoSearch();" class="md-icon-button">
					<md-icon md-svg-icon="img/ic_search_24px.svg"></md-icon>
				</md-button>

				<md-button ng-show="!showSearch" ng-click="toggleLeft()" class="md-icon-button" aria-label="Settings">
					<md-icon md-svg-icon="img/ic_menu_48px.svg"></md-icon>
				</md-button>
			</div>
		</md-toolbar>
		<div layout="row" ng-view></div>

		<script src="<?php llr("resources/jquery/dist/jquery.min.js");?>"></script>
		<script src="<?php llr("resources/bootstrap/dist/js/bootstrap.min.js");?>"></script>
		<script src="<?php llr("resources/angular/angular.js");?>"></script>
		<script src="<?php llr("resources/angular-aria/angular-aria.js");?>"></script>
		<script src="<?php llr("resources/angular-animate/angular-animate.js");?>"></script>
		<script src="<?php llr("resources/hammerjs/hammer.js");?>"></script>
		<script src="<?php llr("resources/angular-material/angular-material.js");?>"></script>
		<script src="<?php llr("resources/moment/moment.js");?>"></script>
		<script src="<?php llr("resources/moment/locale/lv.js");?>"></script>
		<script src="<?php llr("resources/underscore/underscore-min.js");?>"></script>
		<script src="<?php llr("resources/angular-route/angular-route.min.js");?>"></script>
		<!-- <script src="https://cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min.js"></script>  -->
		<!-- <script src="<?php llr("resources/jquery.adaptive-backgrounds/src/jquery.adaptive-backgrounds.js");?>"></script> -->
		<!-- <script src="<?php llr("resources/pleasejs/src/Please.js");?>"></script> -->
		<script src="<?php llr("resources/tinycolor/tinycolor.js");?>"></script>
		<script src="<?php llr("aproject/angular-adaptive-backgrounds.js");?>"></script>
		<script src="<?php llr("resources/angular-touch/angular-touch.js");?>"></script>
		<script src="<?php llr("resources/angular-carousel/dist/angular-carousel.js");?>"></script>
		<script src="<?php llr("aproject/ngscroll.js");?>"></script>

		<!-- angular app -->
		<script src="<?php llr("aproject/app.js");?>"></script>
		<script src="<?php llr("aproject/config.js");?>"></script>
		<script src="<?php llr("aproject/filters.js");?>"></script>
		<script src="<?php llr("aproject/route.js");?>"></script>
		<script src="<?php llr("aproject/controllers/base.js");?>"></script>
		<script src="<?php llr("aproject/controllers/article.js");?>"></script>
		<script src="<?php llr("aproject/controllers/category.js");?>"></script>
		<script src="<?php llr("aproject/controllers/query.js");?>"></script>
	</body>
</html>