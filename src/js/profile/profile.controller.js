class ProfileCtrl {
  constructor(profile, $state, $rootScope) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

  }
}


export default ProfileCtrl;
