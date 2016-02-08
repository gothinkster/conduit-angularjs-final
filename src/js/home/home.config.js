function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home/home.html',
    title: 'Home'
  });

};

export default HomeConfig;
