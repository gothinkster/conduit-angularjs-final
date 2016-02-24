class CommentCtrl {
  constructor(User) {
    'ngInject';


    // The user can only edit/delete this comment if they are the author
    if (User.current) {
      this.canModify = (User.current.username === this.data.author.username);
    } else {
      this.canModify = false;
    }

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
