class ProfileArticlesCtrl {
  constructor(profile, Articles, $state, $rootScope) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');

    // `main` state's filter should be by author
    if (this.profileState === 'main') {
      this.filter = {author: this.profile.username};

    } else if (this.profileState === 'favorites') {
      this.filter = {favorited: this.profile.username};
    }


    this.loadingArticles = true;
    Articles.query({ type: 'all', filters: this.filter }).then(
      (articles) => {
        this.loadingArticles = false;
        this.articleList = articles;
      },
      (err) => {
        this.loadingArticles = false;
      }
    );


  }
}


export default ProfileArticlesCtrl;
