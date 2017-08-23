(function() {

    var app = angular.module('app', [
        'ui.router'
    ]);

    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'view/home/home.html',
                controller: 'HomeController'
            })
            .state('detalhe', {
                url: '/detalhe',
                templateUrl: 'view/home/detalhe.html',
                controller: 'DetalheController',
                controlerAs: 'ctrl',
                params: {
                    item: null
                }
            })
    });

    app.directive('dtDataTable', function($timeout) {
        return {
            restrict: 'AE',
            scope: {

            },
            //template: 'oi',
            link: function(scope, element, attr) {

                console.log(element);
                $timeout(function() {
                    $(element).DataTable();
                })

                console.log(scope);
            }
        }
    })


    app.controller('DetalheController', ['$stateParams', function($stateParams) {
        var vm = this;
        vm.item = $stateParams.item;

    }]);


    app.controller("HomeController", ["$scope", function($scope) {

        var vm = this;
        console.log($scope.$id)


        vm.list = [
            { id: 1, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 12, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 13, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 14, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 15, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 16, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 17, nome: "James", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 127, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 122, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" },
            { id: 111, nome: "marcio", cidade: "São paulo", endereco: "Endereo xpto" }

        ]
    }])
})();