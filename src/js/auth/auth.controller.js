class AuthCtrl {
  constructor($rootScope, $state) {
    'ngInject';

    this.title = $state.current.title;
    this.stateName = $state.current.name;
    this.isSubmitting = false;

    // Make it easy to lookup whether we're on login, register, etc.
    // Particularly useful for ng-show/ng-hide!
    this.stateIs = {
      login: $state.current.name == 'login',
      register: $state.current.name == 'register'
    }

    this.formData = {}

    // do stuff
    this.submitForm = () => {
      this.isSubmitting = true;
    }

  }
}


export default AuthCtrl;
