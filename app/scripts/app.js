(function() {
	'use strict';
	angular.module('blog', ['ngRoute', 'blog.controllers']);

	function config($locationProvider, $routeProvider) {
        // $locationProvider.html5Mode(true)--> es importante, ya que permite que las URLs no lleven el caracter # 
        // al inicio de ellas, como utiliza por defecto Angular. Quedando así más limpias.
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/post-list.tpl.html',
				controller: 'PostListCtrl',
				controllerAs: 'postlist'
			})
			.when('/post/:postId', {
				templateUrl: 'views/post-detail.tpl.html',
				controller: 'PostDetailCtrl',
				controllerAs: 'postdetail'
			})
			.when('/new', {
				templateUrl: 'views/post-create.tpl.html',
				controller: 'PostCreateCtrl',
				controllerAs: 'postcreate'
			});
	}
	angular
		.module('blog')
		.config(config);
})();
