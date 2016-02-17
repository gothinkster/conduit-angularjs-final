function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home'
  });

};

export default HomeConfig;
