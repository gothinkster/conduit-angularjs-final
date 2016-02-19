import authInterceptor from './auth.interceptor';


function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Push our interceptor for auth
  $httpProvider.interceptors.push(authInterceptor);


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
