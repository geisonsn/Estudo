angular.module("alurapic").controller("FotosController", function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = "";
	$scope.mensagem = "";

	$http.get("v1/fotos")
	.success(function(fotos) {
		$scope.fotos = fotos;	
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {
		$http.delete("v1/fotos/" + foto._id)
			.success(function() {
				$scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso";
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);
			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = "Não foi possível remover a foto " + foto.titulo;
			});
	}

	/*
	var promise = $http.get("v1/fotos");
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;	
	}).catch(function(erro) {
		console.log(error);
	});
	*/

	/*
	$scope.fotos = [
		{
			titulo : "Leão 1",
			url : "http://www.fundosanimais.com/Minis/leoes.jpg"
		},
		{
			titulo : "Leão 2",
			url : "http://www.fundosanimais.com/Minis/leoes.jpg"
		},
		{
			titulo : "Leão 3",
			url : "http://www.fundosanimais.com/Minis/leoes.jpg"
		}
	];
	*/
});