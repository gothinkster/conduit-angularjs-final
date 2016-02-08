function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Profile', {
    url: '/profile',
    controller: 'ProfileCtrl as profile',
    templateUrl: 'profile/profile.html',
    title: 'Profile'
  });

};

export default ProfileConfig;
