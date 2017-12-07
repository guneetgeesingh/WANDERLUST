var app = angular.module("spotApp", ['ui.router' , 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider

        .state("search", {
            url: "/search",
            templateUrl: "./views/search.html",
            controller: "searchController"

        })
    
        .state("user", {
            url: "/",
            templateUrl: "./views/user.html",
            controller: "showController"

        })
        .state("shows", {
            url: "/show",
            templateUrl: "./views/show.html",
            controller: "showController"

        })
        .state("show", {
            url: "/show/:id",
            templateUrl: "./views/map.html",
            controller: "mapController"

        })


})