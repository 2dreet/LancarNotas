(function () {
    'use strict';
    angular.module('br.pr.pt.www.lancar.notas.com.br').service('FiltroService', function ($rootScope) {

        this.localizarFornecedor = function (objeto) {
            $rootScope.inicioGlobalFornecedorModalFiltro();
            $(".fornecedorModalFiltro").modal('show');
            $('.fornecedorModalFiltro').on('hide.bs.modal', function (event) {
                if (objeto === undefined || objeto === null) {
                    objeto = {'fornecedor': null};
                } else if (objeto.fornecedor === undefined) {
                    objeto.fornecedor = null;
                }

                if ($rootScope.fornecedorSelecionado !== undefined && $rootScope.fornecedorSelecionado !== null && $rootScope.fornecedorSelecionado.id !== undefined) {
                    var fornecedorAux = JSON.parse(JSON.stringify($rootScope.fornecedorSelecionado));
                    fornecedorAux = {id: fornecedorAux.id, descricao: fornecedorAux.descricao};
                    objeto.fornecedor = fornecedorAux;
                }
                $rootScope.fornecedorSelecionado = null;
                $('.fornecedorModalFiltro').off('hide.bs.modal');
            });
        };

    });
})();

