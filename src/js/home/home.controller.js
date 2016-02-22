class HomeCtrl {
  constructor(User, Tags, AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;

    this.tags = null;
    Tags.getAll().then((tags) => this.tags = tags);
  }

}

export default HomeCtrl;
