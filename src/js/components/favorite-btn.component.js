class FavoriteBtnCtrl {
  constructor() {
    'ngInject';
    this.test = "Jacob!"
  }
}

let FavoriteBtn= {
  bindings: {
    articleId: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/favorite-btn.html'
};

export default FavoriteBtn;
