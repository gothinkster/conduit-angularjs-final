class CommentCtrl {
  constructor() {
    'ngInject';
    // this.appName = AppConstants.appName;
  }
}

let Comment = {
  bindings: {
    isAuthor: '='
  },
  controller: CommentCtrl,
  templateUrl: 'article/comment.html'
};

export default Comment;
