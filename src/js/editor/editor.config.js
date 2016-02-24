function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.editor', {
    url: '/editor/:slug',
    controller: 'EditorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'editor/editor.html',
    title: 'Editor',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      },
      article: function(Articles, User, $state, $stateParams) {
        // If we're trying to edit an article
        if ($stateParams.slug) {
          return Articles.get($stateParams.slug).then(
            (article) => {
              // If the current user is the author, resolve the article data
              if (User.current.username === article.author.username) {
                return article;

              // Otherwise, redirect them to home page
              } else {
                $state.go('app.home');
              }
            },
            // If there's an error (article doesn't exist, etc), redirect to home page
            (err) => $state.go('app.home')
          );

        // If this is a new article, then just return null
        } else {
          return null;
        }
      }

    }
  });

};

export default EditorConfig;
