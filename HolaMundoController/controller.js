var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function ($scope) {
    $scope.nombre = "Santiago Vasquez";
    $scope.nuevoComentario = {};
    $scope.comentarios = [{
        comentario: "Buen tutorial",
        userName: "codigo facilito"
    },
    {
        comentario: "Mal tutorial",
        userName: "Santiago Vasquez"
    }
    ];

    $scope.AgregarComentario = function () {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});
