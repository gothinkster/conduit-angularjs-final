class HomeCtrl {
  constructor(auth, User, Articles, Tags, AppConstants) {
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


      console.log(auth)

  }

}

export default HomeCtrl;
