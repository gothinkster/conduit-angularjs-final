function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider

  .state('login', {
    url: '/login',
    controller: 'AuthCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign in'
  })

  .state('register', {
    url: '/register',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign up'
  });

};

export default AuthConfig;
