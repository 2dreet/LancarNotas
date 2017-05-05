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

    });
})();

