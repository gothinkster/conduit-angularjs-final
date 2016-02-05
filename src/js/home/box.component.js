class BoxController {
  constructor() {
    'ngInject';
    this.test = "Jacob!"
    console.log(this)
  }
}

let BoxComponent = {
  controller: BoxController,
  template: '<div>Hello. I am a {{ $ctrl.test }}</div>'
};

export default BoxComponent;
