function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Article', {
    url: '/article',
    controller: 'ArticleCtrl as article',
    templateUrl: 'article/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
