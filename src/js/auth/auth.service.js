export default class Auth {
  constructor(AppConstants, $window, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
    this._$http = $http;

    this.list = ["Jake", "Jon", "Thruster"]
  }

  // Attempt either login or register
  attempt(type, credentials) {
    console.log(type)
    let route = (type === 'login') ? '/sign_in' : '';
    return this._$http({
      url: this._AppConstants.api + '/api/users' + route,
      method: 'POST',
      data: {
        user: {
          email: 'eric@esft.com',
          password: 'sagetlick'
        }
      }
    }).then((res) => this.saveToken(res.data.user.token));
  }


  // JWT Methods
  parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }

  isAuthed() {
    let token = this.getToken();
    return !!token;
  }

  saveToken(token) {
    console.log('saving token ' + token)
    this._$window.localStorage[this._AppConstants.jwtKey] = token;
  }

  getToken() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  logout() {
    this._$window.localStorage.removeItem(_this.AppConstants.jwtKey);
  }



  // add(name) {
  //   this.list.push(name);
  // };

  // getName() {
  //   return this._$q.when("Bobby Tables");
  // }
}
