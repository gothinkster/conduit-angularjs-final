function AppConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home/home.html',
    title: 'Home'
  })

  .state('Profile', {
    url: '/profile',
    controller: 'ProfileCtrl as profile',
    templateUrl: 'profile/profile.html',
    title: 'Profile'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
