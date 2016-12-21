// como se fosse uma classe de linguagem backend chamada AppController

// "use strict";
angular.module("app", [])
// .service('myService', function () {})
.controller('AppCtrl', function($scope, $http) 
{
	// rota que aciona função callback no server.js (node) linkado pela url e recebe um resultado
	// $http.get('/listacontatos').success(function(resp){
	// 	$scope.listaContatos = resp;
	// })

	$http
	({
	  method: 'GET',
	  url: '/listacontatos'
	})
	.then(function successCallback(resp) 
	{
		console.log(resp.data);
	    $scope.listaContatos = resp.data;
	}, 
	function errorCallback(resp) 
	{
	    alert('azedo o pé do frango');
	});
});