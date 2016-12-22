// como se fosse uma classe de linguagem backend chamada AppController

// "use strict";
angular.module("app", [])
// .service('myService', function () {})
.controller('AppCtrl', function($scope, $http) 
{
	// função que refresca automaticamente a pagina na respsta do server
	var refresh = function()
	{
		// rota que aciona função callback no server.js (node) linkado pela url e recebe um resultado
		$http
		({
		  method: 'GET',
		  url: '/listacontatos'
		})
		.then(function successCallback(resp) 
		{
			console.log(resp.data);
		    $scope.listaContatos = resp.data;
		    // $scope.contato = "";
		}, 
		function errorCallback(resp) 
		{
		    alert('azedo o pé do frango');
		});
	};

	// chamando a função refresh que traz a lista de contatos atualizada
	refresh();

	// função que adiciona contatos
	$scope.addContato = function()
	{
		console.log($scope.contato);

		$http
		({
		  method: 'POST',
		  url: '/listacontatos',
		  data: $scope.contato
		})
		.then(function successCallback(resp) 
		{
			console.log(resp);
			refresh();
			// limpando os dados dos campos de inserção no sucesso da resposta
			$scope.contato = "";
		}, 
		function errorCallback(resp) 
		{
		    alert('deu ruim no insert!!');
		});
	};

	// função que remove contatos
	$scope.remover = function(id)
	{
		console.log(id);
		$http
		({
		  method: 'DELETE',
		  url: '/listacontatos/' + id
		})
		.then(function successCallback(resp) 
		{
			refresh();
		}, 
		function errorCallback(resp) 
		{
		    alert('ai lasco tudo!!');
		});
	};

	// função que seleciona os contatos para editar
	$scope.editar = function(id)
	{
		console.log(id);
		$http
		({
		  method: 'GET',
		  url: '/listacontatos/' + id
		})
		.then(function successCallback(resp) 
		{
			$scope.contato = resp.data;
		}, 
		function errorCallback(resp) 
		{
		    alert('tendi nada agora...');
		});
	};

	// função que edita os contatos selecionados
	$scope.alterar = function(id)
	{
		console.log($scope.contato._id);
		$http
		({
		  method: 'PUT',
		  url: '/listacontatos/' + $scope.contato._id,
		  data: $scope.contato
		})
		.then(function successCallback(resp) 
		{
			refresh();
			// limpando os dados dos campos de inserção no sucesso da resposta
			$scope.contato = "";
		}, 
		function errorCallback(resp) 
		{
		    alert('vigimaria!!!');
		});
	};

	// função limpeza dos campos
	$scope.limpar = function()
	{
		$scope.contato = "";
	};
});