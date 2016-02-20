class AuthCtrl {
  constructor(User, AppConstants, $http, $state) {
    'ngInject';

    // Attach our services to this controller
    this._AppConstants = AppConstants;
    this._User = User;

    this.title = $state.current.title;
    this.stateName = $state.current.name;
    this.isSubmitting = false;

    // Make it easy to lookup whether we're on login, register, etc.
    // Particularly useful for ng-show/ng-hide!
    this.stateIs = {
      login: this.stateName == 'login',
      register: this.stateName == 'register'
    }

    this.formData = {};
    this.errors = null;

  }

  // do stuff
  submitForm () {

    this.isSubmitting = true;

    // if (!this._Auth.isAuthed()) {
    this._User.attemptAuth(this.stateName, this.formData).then(
      // Callback for success
      (res) => {
        this.isSubmitting = false;
      },
      // Callback for failure
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );

  }

}


export default AuthCtrl;
