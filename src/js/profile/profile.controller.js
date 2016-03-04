class ProfileCtrl {
  constructor(profile, User, $state) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

    // Show edit profile is this profile is the current user's
    if (User.current) {
      this.isUser = (User.current.username === this.profile.username);
    } else {
      this.isUser = false;
    }

  }
}


export default ProfileCtrl;
