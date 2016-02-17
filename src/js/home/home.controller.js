class ExampleCtrl {
  constructor($rootScope, AppConstants, Names) {
    'ngInject';

    this.appName = AppConstants.appName;

    // $rootScope.setPageTitle("Eric Simons");

    this._Names = Names;

    this.number = 1234;
  }

  getThing() {
    this._Names.add('Cuh LAY tun');
  };
}

export default ExampleCtrl;
