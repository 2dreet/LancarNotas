(function () {
    'use strict';
    angular.module("br.pr.pt.www.lancar.notas.com.br").controller("escolaController", ['$rootScope', '$scope', 'EntidadeService', function ($rootScope, $scope, EntidadeService) {
            $scope.escola = {};
            $scope.obt = "";
            $scope.getObjeto = function () {
                EntidadeService.localizarEntidade($scope.obt).then(function successCallback(response) {
                    $scope.escola = response.data;
                    alert(angular.toJson($scope.escola));
                }, function errorCallback(response) {
                    $scope.escola = null;
                });
            };
        }]);
})();

 