function WriterConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.writer', {
    url: '/writer/:articleId',
    controller: 'WriterCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'writer/writer.html',
    title: 'Writer',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });

};

export default WriterConfig;
