class CommentCtrl {
  constructor(User) {
    'ngInject';
    // The user can only edit/delete this comment if they are the author
    this.canModify = (User.current.username === this.data.author.username);

  }
}

let Comment = {
  bindings: {
    data: '='
  },
  controller: CommentCtrl,
  templateUrl: 'article/comment.html'
};

export default Comment;
