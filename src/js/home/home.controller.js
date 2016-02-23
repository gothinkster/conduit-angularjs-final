class HomeCtrl {
  constructor(User, Articles, Tags, AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => this.tags = tags
      );

    // Get list of all articles
    Articles
      .getAll()
      .then(
        (list) => this.articleList = list
      );

  }

}

export default HomeCtrl;
