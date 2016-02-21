function authInterceptor(JWT, AppConstants, $location, $q) {
  'ngInject';
  let token = JWT.get();

  return {
    // automatically attach Authorization header
    request: function(config) {
      if(config.url.indexOf(AppConstants.api) === 0 && token) {
        config.headers.Authorization = 'Token ' + token;
      }
      return config;
    },

    // Handle 401
    responseError: function(rejection) {
      if (rejection.status === 401) {
        // clear any JWT token being stored
        JWT.destroy();
        // redirect to the homepage
        $location.path('/');
      }
      return $q.reject(rejection);
    }

  }
}

export default authInterceptor;
