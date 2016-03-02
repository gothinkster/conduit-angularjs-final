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


    this.articleLimit = 1;

    // Initialize an empty object to start
    this.currentList = {};

    // Populate our list when the controller loads.
    this.changeList({
      type: User.current ? 'feed' : 'all',
      limit: this.articleLimit,
      offset: 0
    });

  }

  changeList(config) {
    Object.assign(this.currentList, config);
    this.getArticles();
  }

  changePage(toNum) {
    // Helper method
    this.changeList({
      offset: toNum * this.articleLimit
    })
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
