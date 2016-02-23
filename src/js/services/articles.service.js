export default class Articles {
  constructor(AppConstants, $http) {
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

  // Retrieve a single article
  get(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug,
      method: 'GET'
    }).then((res) => res.data.article);
  }


  // Get lists of articles
  getAll() {
    return this.query({ type:'all' });
  }

  getFeed() {
    return this.query({ type:'feed' });
  }

  getByAuthor(username) {
    return this.query({ type:'all', filters: { author: username } });
  }

  getByTag(slug) {
    return this.query({ type:'all', filters: { tag: slug } });
  }

  /*
    `query` is typically used as a private method, but can be used
    in controllers if necessary.

    Config object spec:

    {
      type: String [REQUIRED] - Accepts "all", "feed"
      filters: Object - Key value of URL params (i.e. {author:"ericsimons"} )
    }
  */
  query(config) {
    // Feed has it's own endpoint, whereas all others route from /articles.
    let endpoint = (config.type === 'feed') ? '/feed' : '/articles';

    // Create the $http object for this request
    let request = {
      url: this._AppConstants.api + endpoint,
      method: 'GET',
      params: config.filters ? config.filters : null
    };
    return this._$http(request).then((res) => res.data.articles);
  }


}
