import marked from 'marked';

class ArticleCtrl {
  constructor(article, Comments, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    this._Comments = Comments;

    // Update the title of this page
    $rootScope.setPageTitle(this.article.title);

    this.article.body = $sce.trustAsHtml(marked(this.article.body));

    // Get comments for this article
    Comments.getAll(this.article.slug).then((comments) => this.comments = comments);

    // Initialize blank comment form
    this.resetCommentForm();
  }

  resetCommentForm() {
    this.commentForm = {
      isSubmitting: false,
      body: '',
      errors: []
    }
  }

  addComment() {
    this.commentForm.isSubmitting = true;

    this._Comments.add(this.article.slug, this.commentForm.body).then(
      (comment) => {
        this.comments.push(comment);
        this.resetCommentForm();
      },
      (err) => {
        this.commentForm.isSubmitting = true;
        this.commentForm.errors = err.data.errors;
      }
    );
  }

}


export default ArticleCtrl;
