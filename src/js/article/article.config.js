function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article/:slug',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article/article.html',
    // When the controller loads, the title of the web page
    // will be changed to the article's title
    title: 'Article',
    resolve: {
      article: function(Articles, $state, $stateParams) {
        return Articles.get($stateParams.slug).then(
          (article) => article,
          (err) => $state.go('app.home')
        );
      }
    }
  });

};

export default ArticleConfig;
