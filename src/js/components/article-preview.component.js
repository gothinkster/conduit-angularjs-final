class ArticlePreviewCtrl {
  constructor() {
    'ngInject';
    this.test = "Jacob!"
  }
}

let ArticlePreview = {
  bindings: {
    articleData: '='
  },
  controller: ArticlePreviewCtrl,
  templateUrl: 'components/article-preview.html'
};

export default ArticlePreview;
