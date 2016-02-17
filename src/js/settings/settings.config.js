function SettingsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Settings', {
    url: '/settings',
    controller: 'SettingsCtrl as settings',
    templateUrl: 'settings/settings.html',
    title: 'Settings'
  });

};

export default SettingsConfig;
