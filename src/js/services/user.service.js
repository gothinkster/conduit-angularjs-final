export default class User {
  constructor(JWT, AppConstants, $window, $state, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
    this._$state = $state;
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
      url: this._AppConstants.api + '/users' + route,
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
    // Should we return the promise at different points in here?
    // Unclear atm.
    let deferred = this._$q.defer();

    // Check for JWT token first
    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    // If there's a JWT & user is already set
    if (this.current) {
      deferred.resolve(true);

    // If current user isn't set, get it from the server.
    // If server doesn't 401, set current user & resolve promise.
    } else {
      this._$http({
        url: this._AppConstants.api + '/profiles/eric',
        method: 'GET',
      }).then(
        (res) => {
          this.current = res.data.profile;
          deferred.resolve(true);
        },
        // If an error happens, that means the user's token was invalid.
        (err) => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
        // Reject automatically handled by auth interceptor
        // Will boot them to homepage
      );
    }

    return deferred.promise;
  }

  // This methods will be used by UI-Router resolves
  ensureAuthIs(bool) {
    let deferred = this._$q.defer();

    this.verifyAuth().then((authValid) => {
      // if it's the opposite, redirect home
      if (authValid !== bool) {
        this._$state.go('app.home');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    })

    return deferred.promise;
  }


  logout() {
    this.current = null;
    this._JWT.destroy();
    // Do a hard page refresh to ensure all data is flushed.
    this._$window.location.reload();
  }


}
