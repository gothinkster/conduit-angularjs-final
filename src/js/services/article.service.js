export default class Article {
  constructor(JWT, AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


  }

  create(payload) {

    return this._$http({
      url: this._AppConstants.api + '/articles',
      method: 'POST',
      data: payload
    }).then((res) => res.data.article);

  }


}
