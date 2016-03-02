class ArticlePreviewCtrl {
  constructor() {
    'ngInject';

  }
}

let ArticlePreview = {
  bindings: {
    for: '='
  },
  controller: ArticlePreviewCtrl,
  templateUrl: 'components/article-helpers/article-preview.html'
};

export default ArticlePreview;
