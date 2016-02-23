export default class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
  }


  // JWT Methods
  parse(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(this._$window.atob(base64));
  }

  exists() {
    let token = this.get();
    return !!token;
  }

  save(token) {
    this._$window.localStorage[this._AppConstants.jwtKey] = token;
  }

  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }


}
