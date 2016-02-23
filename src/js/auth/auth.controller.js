class AuthCtrl {
  constructor(User, AppConstants, $state) {
    'ngInject';

    // Attach our services to this controller
    this._AppConstants = AppConstants;
    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.isSubmitting = false;
    this.authType = $state.current.name.replace('app.', '');


    this.formData = {};
    this.errors = null;

  }

  // do stuff
  submitForm () {

    this.isSubmitting = true;

    // if (!this._Auth.isAuthed()) {
    this._User.attemptAuth(this.authType, this.formData).then(
      // Callback for success
      (res) => {
        this._$state.go('app.home');
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
