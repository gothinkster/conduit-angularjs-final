class ArticleMetaCtrl {
  constructor() {
    'ngInject';
    this.test = "Jacob!"
  }
}

let ArticleMeta= {
  bindings: {
    for: '='
  },
  transclude: true,
  controller: ArticleMetaCtrl,
  templateUrl: 'components/article-helpers/article-meta.html'
};

export default ArticleMeta;