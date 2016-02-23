function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve:{
      auth: function(User) {
        return User.verifyAuth();
      }
    }
  });

};

export default HomeConfig;
