(function () {
    'use strict';
    angular.module('br.pr.pt.www.lancar.notas.com.br').service('Utilitario', function () {

        this.dataDbToJS = function (data) {
            if (data !== undefined && data !== null) {
                return (new Date(data.substring(0, 4), data.substring(5, 7) - 1, data.substring(8, 10)));
            } else {
                return "";
            }
        };
        
        this.fecharDialog = function (idComponente) {
            $(idComponente).modal('hide');
        };

        this.abrirDialog = function (idComponente) {
            $(idComponente).modal('show');
        };
    });
})();