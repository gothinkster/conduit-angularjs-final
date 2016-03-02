class ListPaginationCtrl {
  constructor() {
    'ngInject';

  }
}

let ListPagination= {
  bindings: {
    for: '='
  },
  controller: ListPaginationCtrl,
  templateUrl: 'components/article-helpers/list-pagination.html'
};

export default ListPagination;
