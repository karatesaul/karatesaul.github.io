angular.module('karatesaul', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider.otherwise('/main')
    .when('/main', {
        template: '<main-page></main-page>'
    })
    .when('/links', {
        template: '<links-page></links-page>'
    })
    .when('/games', {
        template: '<games-page></games-page>'
    });
})
.controller('mainCtrl', [function () {
}])