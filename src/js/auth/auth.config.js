function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider

  .state('login', {
    url: '/login',
    controller: 'AuthCtrl as auth',
    templateUrl: 'auth/auth.html',
    title: 'Sign in'
  })

  .state('register', {
    url: '/register',
    controller: 'AuthCtrl as auth',
    templateUrl: 'auth/auth.html',
    title: 'Sign up'
  });

};

export default AuthConfig;
