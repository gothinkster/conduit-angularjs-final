class ArticleMetaCtrl {
  constructor() {
    'ngInject';
    this.test = "Jacob!"
  }
}

let ArticleMeta= {
  bindings: {
    articleData: '='
  },
  transclude: true,
  controller: ArticleMetaCtrl,
  templateUrl: 'components/article-meta.html'
};

export default ArticleMeta;
