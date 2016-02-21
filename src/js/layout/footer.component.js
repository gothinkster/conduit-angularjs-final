class AppFooterCtrl {
  constructor(AppConstants) {
    'ngInject';
    this._AppConstants = AppConstants;
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: 'layout/footer.html'
};

export default AppFooter;
