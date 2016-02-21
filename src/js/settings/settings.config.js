function SettingsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('settings', {
    url: '/settings',
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'settings/settings.html',
    title: 'Settings'
  });

};

export default SettingsConfig;
