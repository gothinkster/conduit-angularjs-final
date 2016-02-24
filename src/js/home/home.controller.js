class HomeCtrl {
  constructor(User, Articles, Tags, AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._Articles = Articles;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => this.tags = tags
      );

    // Populate our list when the controller loads.
    this.changeList({
      type: User.current ? 'all' : 'all'
      // type: User.current ? 'feed' : 'all'
    });

  }

  changeList(config) {
    this.currentList = config;
    this.getArticles();
  }

  getArticles() {
    this.articleList = null;

    this._Articles
      .query(this.currentList)
      .then(
        (list) => this.articleList = list
      );
  }

}

export default HomeCtrl;
