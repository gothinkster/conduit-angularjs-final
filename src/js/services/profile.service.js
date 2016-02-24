export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


  }

  // Retrieve a user's profile
  get(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'GET'
    }).then((res) => res.data.profile);
  }

  // Follow a user
  follow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'POST'
    }).then((res) => res.data);
  }

  // Unfollow a user
  unfollow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'DELETE'
    }).then((res) => res.data);
  }




}
