myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '/app/views/home.html',
            controller: 'homeCtrl'
        })
        .when('/map', {
            templateUrl : '/app/views/map.html',
            controller: 'mapCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

   // use the HTML5 History API
   $locationProvider.html5Mode({enabled: true, requireBase: false});

}])
