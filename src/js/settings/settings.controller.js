class SettingsCtrl {
  constructor($rootScope) {
    'ngInject';

    this.isSubmitting = false;
    this.formData = {}

    this.submitForm = () => {
      this.isSubmitting = true;
    }

  }
}


export default SettingsCtrl;
