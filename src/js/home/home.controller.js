// function ExampleCtrl($state, $rootScope) {
//   'ngInject';

//   // ViewModel
//   const vm = this;

//   vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
//   vm.number = 1234;

// }

class ExampleCtrl {
  constructor($rootScope, Names) {
    'ngInject';

    // $rootScope.setPageTitle("Eric Simons");

    this._Names = Names;

    this.number = 1234;
  }

  getThing() {
    this._Names.add('Cuh LAY tun');
  };
}

export default ExampleCtrl;
