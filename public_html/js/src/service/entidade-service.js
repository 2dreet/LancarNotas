(function () {
    'use strict';
    angular.module('br.pr.pt.www.lancar.notas.com.br').service('EntidadeService', function ($http, Factory) {

        this.localizarEntidade = function (entidade) {
            return $http({
                method: 'POST',
                crossDomain: true,
                url: Factory.urlWs + entidade + "/getEntidade",
                headers: {'Content-Type': 'application/json'}
            });
        };

        this.inserirEntidade = function (entidade, objeto) {
            var envio = {'dados': objeto};
            return $http({
                method: 'POST',
                data: envio,
                crossDomain: true,
                url: Factory.urlWs + entidade + "/insertEntidade" + Factory.debug,
                headers: {'Content-Type': 'application/json'}
            });
        };

    });
})();

