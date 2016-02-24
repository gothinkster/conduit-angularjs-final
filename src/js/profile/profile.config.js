function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    // When the controller loads, the title of the web page
    // will be changed to the username of this profile
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.username).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        );
      }
    }
  })

  .state('app.profile.main', {
    url:'',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile-articles.html',
    title: 'Profile'
  })

  .state('app.profile.favorites', {
    url:'/favorites',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile-articles.html',
    title: 'Favorites'
  });

};

export default ProfileConfig;
