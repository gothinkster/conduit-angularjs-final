class AppHeaderCtrl {
  constructor(AppConstants, User) {
    'ngInject';
    this._AppConstants = AppConstants;
    this._User = User;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
