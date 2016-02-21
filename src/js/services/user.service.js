export default class User {
  constructor(JWT, AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT;
    this._$q = $q;

    // Object to store our user properties
    this.current = null;
  }

  // Try to authenticate by registering or logging in
  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/sign_in' : '';
    return this._$http({
      url: this._AppConstants.api + '/api/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      // On success, save the token and then return the data
      (res) => {
        // Set the JWT token
        this._JWT.save(res.data.user.token)
        // Store the user's info for easy lookup
        this.current = res.data.user;

        return res;
      }
    );
  }

  verifyAuth() {
    let deferred = this._$q.defer();

    // Check for JWT token first
    if (!this._JWT.get()) {
      deferred.reject();
    }

    // If there's a JWT & user is already set
    if (this.current) {
      deferred.resolve();

    // If current user isn't set, get it from the server.
    // If server doesn't 401, set current user & resolve promise.
    } else {
      this._$http({
        url: this._AppConstants.api + '/api/profiles/eric',
        method: 'GET',
      }).then(
        (res) => {
          this.current = res.data.profile;
          deferred.resolve();
        }
        // Reject automatically handled by auth interceptor
        // Will boot them to homepage
      );
    }

    return deferred.promise;
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
  }


}
