(function() {
	'use strict';
	// Creamos módulo blog con la dependencia de los services
	angular.module('blog.controllers', ['blog.services'])
		.controller('PostListCtrl', PostListCtrl)
		.controller('PostDetailCtrl', PostDetailCtrl)
        .controller('PostCreateCtrl', PostCreateCtrl);

	function PostListCtrl(Post) {
		// Hacemos una llamada AJAX a la URl http://jsonplaceholder.typicode.com/posts y
		// nos devuelve el resultado dentro de la variable posts. Eso lo conseguimos con el servicio Post
		this.posts = Post.query();
	}

	function PostDetailCtrl($routeParams, Post, Comment) {
		this.post = {};
		this.comments = {};
		this.user = {};
		var self = this; // Para guardar la referencia
		Post.query({
			id: $routeParams.postId
		}).$promise.then(
			//Success
			function(data) {
				self.post = data[0];
				self.user = User.query({
					id: self.user.userId
				});
			},
			//Error
			function(error) {
				console.log(error);
			}
		);
		this.comments = Comment.query({
			postId: $routeParams.postId
		});
	}

	function PostCreateCtrl(Post) {
		var self = this;
		this.create = function() {
			Post.save(self.post);
		};
	}
})();
