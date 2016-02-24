class HomeCtrl {
  constructor(User, Articles, Tags, AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._Articles = Articles;

    // Get list of all tags
    this.loadingTags = true;
    Tags
      .getAll()
      .then(
        (tags) => {
          this.loadingTags = false;
          this.tags = tags
        }
      );

    // Populate our list when the controller loads.
    this.changeList({
      type: User.current ? 'feed' : 'all'
      // type: User.current ? 'feed' : 'all'
    });

  }

  changeList(config) {
    this.currentList = config;
    this.getArticles();
  }

  getArticles() {
    this.articleList = [];
    this.loadingArticles = true;

    this._Articles
      .query(this.currentList)
      .then(
        (list) => {
          this.loadingArticles = false;
          this.articleList = list
        }
      );
  }

}

export default HomeCtrl;
