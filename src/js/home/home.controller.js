class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$scope = $scope;

    // Get list of all tags
    this.loadingTags = true;
    Tags
      .getAll()
      .then(
        (tags) => {
          this.loadingTags = false;
          this.tags = tags
        }
      );

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
