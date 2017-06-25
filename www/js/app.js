angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
    		if (window.cordova && window.cordova.plugins.Keyboard) {
      			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      			cordova.plugins.Keyboard.disableScroll(true);
    		}
    		if (window.StatusBar) {
      			StatusBar.styleDefault();
    		}
  	});
})

.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
})


.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

    	.state('app', {
    		url: '/app',
    		abstract: true,
    		templateUrl: 'templates/menu.html',
    		controller: 'AppCtrl'
    	})

    	.state('app.home', {
      		url: '/home',
      		views: {
        		'menuContent': {
          			templateUrl: 'templates/home.html',
        		}
      		},
          params: {'id':'asdasd'}
    	})

      .state('app.campus', {
          url: '/campus',
          views: {
            'menuContent': {
                templateUrl: 'templates/campus.html',
            }
          }
      })

    	.state('app.videos', {
       		url: '/videos',
       		views: {
       			'menuContent': {
        	 		templateUrl: 'templates/videos1.html'
        		}
      		}
    	})


    	.state('log', {
      		url: '/log',
          	templateUrl: 'templates/login.html',
           	controller: 'LogaConta'
    	})

      /*.state('log', {
          url: '/log',
          templateUrl: 'templates/home.html',
            //controller: 'LogaConta'
      })*/

    	.state('conta', {
      		url: '/conta',
        	templateUrl: 'templates/conta.html',
        	controller: 'CriarConta'
  	 })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

