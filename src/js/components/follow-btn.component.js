class FollowBtnCtrl {
  constructor(Profile, User, $state) {
    'ngInject';

    this._Profile = Profile;
    this._User = User;

    this._$state = $state;
  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.register');
      return;
    }

    //this.for.favorited;
    // If fav'd already, unfavorite it
    if (this.for.following) {
      this._Profile.unfollow(this.for.username).then(
        () => {
          this.isSubmitting = false;
          this.for.following = false;
        }
      )

    // Otherwise, favorite it
    } else {
      this._Profile.follow(this.for.username).then(
        () => {
          this.isSubmitting = false;
          this.for.following = true;
        }
      )
    }


  }
}

let FollowBtn= {
  bindings: {
    for: '='
  },
  controller: FollowBtnCtrl,
  templateUrl: 'components/follow-btn.html'
};

export default FollowBtn;
