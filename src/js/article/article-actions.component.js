class ArticleActionsCtrl {
  constructor(User) {
    'ngInject';

    // The user can only edit/delete this comment if they are the author
    if (User.current) {
      this.canModify = (User.current.username === this.for.author.username);
    } else {
      this.canModify = false;
    }

  }
}

let ArticleActions = {
  bindings: {
    for: '='
  },
  controller: ArticleActionsCtrl,
  templateUrl: 'article/article-actions.html'
};

export default ArticleActions;
