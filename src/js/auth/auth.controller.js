class AuthCtrl {
  constructor(Auth, AppConstants, $http, $state) {
    'ngInject';

    // Attach our services to this controller
    this._AppConstants = AppConstants;
    this._Auth = Auth;
    this._$http = $http;

    this.title = $state.current.title;
    this.stateName = $state.current.name;
    this.isSubmitting = false;

    // Make it easy to lookup whether we're on login, register, etc.
    // Particularly useful for ng-show/ng-hide!
    this.stateIs = {
      login: this.stateName == 'login',
      register: this.stateName == 'register'
    }

    this.formData = {}

  }

  // do stuff
  submitForm () {

    this.isSubmitting = true;

    if (!this._Auth.isAuthed()) {
      this._Auth.attempt(this.stateName, {});
    } else {
      console.log('authed already')
    }
    // this._$http({
    //   url: this._AppConstants.api + '/api/profiles/eric/follow',
    //   method: 'POST',
    //   data: {
    //     user: {
    //       email: 'eric@esft.com',
    //       password: 'sagetlick'
    //     }
    //   }
    // })
  }

}


export default AuthCtrl;
