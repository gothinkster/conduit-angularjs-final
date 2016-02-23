import marked from 'marked';

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    // Update the title of this page
    $rootScope.setPageTitle(article.title);

    this.article = article;
    this.article.body = $sce.trustAsHtml(marked(this.article.body));

  }
}


export default ArticleCtrl;
