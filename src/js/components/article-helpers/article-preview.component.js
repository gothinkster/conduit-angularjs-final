class ArticlePreviewCtrl {
  constructor() {
    'ngInject';

  }
}

let ArticlePreview = {
  bindings: {
    article: '='
  },
  controller: ArticlePreviewCtrl,
  templateUrl: 'components/article-helpers/article-preview.html'
};

export default ArticlePreview;
