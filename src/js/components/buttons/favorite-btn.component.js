class FavoriteBtnCtrl {
  constructor(User, Articles, $state) {
    'ngInject';

    this._Articles = Articles;
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
    if (this.for.favorited) {
      this._Articles.unfavorite(this.for.slug).then(
        () => {
          this.isSubmitting = false;
          this.for.favorited = false;
          this.for.favoritesCount--;
        }
      )

    // Otherwise, favorite it
    } else {
      this._Articles.favorite(this.for.slug).then(
        () => {
          this.isSubmitting = false;
          this.for.favorited = true;
          this.for.favoritesCount++;
        }
      )
    }


  }
}

let FavoriteBtn= {
  bindings: {
    for: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favorite-btn.html'
};

export default FavoriteBtn;
