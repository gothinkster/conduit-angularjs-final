class ListErrorsCtrl {
  constructor() {
    'ngInject';
    this.test = () => {
      console.log('its works')
    }
  }
}

let ListErrors= {
  bindings: {
    from: '='
  },
  controller: ListErrorsCtrl,
  templateUrl: 'components/list-errors.html'
};

export default ListErrors;
