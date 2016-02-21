function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('profile', {
    url: '/profile',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    title: 'Profile'
  });

};

export default ProfileConfig;
