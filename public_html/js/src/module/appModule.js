var app = angular.module('br.pr.pt.www.lancar.notas.com.br', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

//app.value('cgBusyDefaults', {
//    backdrop: false,
//    templateUrl: 'loadin.html',
//    delay: 0,
//    minDuration: 0
//});
