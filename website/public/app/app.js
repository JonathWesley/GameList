// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBeZvBVX1mQv9lzFYoOL5M5fUjeRvJvO24",
    authDomain: "game-list-4371c.firebaseapp.com",
    databaseURL: "https://game-list-4371c.firebaseio.com",
    projectId: "game-list-4371c",
    storageBucket: "game-list-4371c.appspot.com",
    messagingSenderId: "829339662897",
    appId: "1:829339662897:web:de26d465d481d890d9b310",
    measurementId: "G-L7QM68WWFS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = angular.module('app',['ngRoute', 'firebase'])
.config(function($routeProvider, $locationProvider){
    $routeProvider

    .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'HomeCtrl',
    })

    .otherwise ({ redirectTo: '/' });
})
.controller('HomeCtrl', function($scope, $firebaseArray){
    const ref = firebase.database().ref("games");
    $scope.games = $firebaseArray(ref);
})
// .controller('OcorrenciasCtrl', function($scope, $firebaseArray){
// 	const ref = firebase.database().ref("ocorrencias");
//     $scope.ocorrencias = $firebaseArray(ref);

//     $scope.atenderOcorrencia = function(id_ocorrencia){
//         var ref2 = firebase.database().ref("ocorrencias/"+id_ocorrencia);
// 		ref2.update({
//             atendido:1
// 		})
//     }

//     $scope.excluirOcorrencia = function(id_ocorrencia){
//         var ref3 = firebase.database().ref("ocorrencias/"+id_ocorrencia);
// 		ref3.remove();
//     }
// })
// .controller('CadastrarClienteCtrl', function($scope, $firebaseArray){
// 	$scope.addCliente = function(){
// 		var ref = firebase.database().ref("cliente_final");
// 		$firebaseArray(ref).$add($scope.cliente)
// 		.then(
// 			function(ref){
// 				$scope.cliente.nome = "";
// 				$scope.cliente.tipo = "";
//                 $scope.cliente.cpf = "";
//                 $scope.cliente.cnpj = "";
//                 $scope.cliente.telefone = "";
// 			},
// 			function(error){
// 				console.log(error);
// 			})
// 	};
// })
