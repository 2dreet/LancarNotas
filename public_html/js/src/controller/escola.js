(function () {
    'use strict';
    angular.module("br.pr.pt.www.lancar.notas.com.br").controller("escolaController", ['Factory', '$http', '$rootScope', '$scope', 'EntidadeService', function (Factory, $http, $rootScope, $scope, EntidadeService) {
            $scope.escola = {};

            var getObjeto = function () {
                EntidadeService.localizarEntidade("escola").then(function successCallback(response) {
                    $scope.escola = response.data;
                }, function errorCallback(response) {
                    $scope.escola = null;
                });
            };

            $scope.sendObjeto = function () {
                $http({
                    method: 'POST',
                    data: $scope.escola,
                    crossDomain: true,
                    url: Factory.urlWs + "escola/insertEntidade" + Factory.debug,
                    headers: {'Content-Type': 'application/json'}
                }).then(function successCallback(response) {
                    alert(angular.toJson(response.data.msgRetorno));
                }, function errorCallback(response) {
                    alert('Erro ao salvar');
                });
            };

            getObjeto();
        }]);
})();

 