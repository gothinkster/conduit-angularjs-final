import angular from 'angular';

// Create the settings module where our functionality can attach to
let settingsModule = angular.module('app.settings', []);


// Include our UI-Router config settings
import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);

// Controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);


export default settingsModule;
