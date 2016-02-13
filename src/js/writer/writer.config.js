function WriterConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('writer', {
    url: '/writer/:articleId',
    controller: 'WriterCtrl as writer',
    templateUrl: 'writer/writer.html',
    title: 'Writer'
  });

};

export default WriterConfig;
