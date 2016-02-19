function authInterceptor(AppConstants, $window, $location, $q) {
  'ngInject';
  return {
    // automatically attach Authorization header
    request: function(config) {
      let token = $window.localStorage[AppConstants.jwtKey];
      if(config.url.indexOf(AppConstants.api) === 0 && token) {
        config.headers.Authorization = 'Token ' + token;
      }
      return config;
    },

    // Handle 401
    responseError: function(rejection) {
      if (rejection.status === 401) {
        $location.path('/')
      }
      return $q.reject(rejection);
    }

  }
}

export default authInterceptor;
