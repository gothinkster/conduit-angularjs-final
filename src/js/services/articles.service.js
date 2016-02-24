export default class Articles {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


  }

  // Favorite an article
  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'POST'
    });
  }

  // Unfavorite an article
  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'DELETE'
    });
  }

  // Creates or updates an article
  save(article) {

    let request = {}


    // If there's a slug, perform an update via PUT w/ article's slug
    if (article.slug) {
      request.url = `${this._AppConstants.api}/articles/${article.slug}`;
      request.method = 'PUT';
      // Delete the slug from the article to ensure the server updates the slug,
      // which happens if the title of the article changed.
      delete article.slug;

    // Otherwise, this is a new article POST request
    } else {
      request.url = `${this._AppConstants.api}/articles`;
      request.method = 'POST';

    }

    // Set the article data in the data attribute of our request
    request.data = { article: article };

    return this._$http(request).then((res) => res.data.article);

  }

  // Delete an article
  destroy(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug,
      method: 'DELETE'
    });
  }

  // Retrieve a single article
  get(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug,
      method: 'GET'
    }).then((res) => res.data.article);
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
