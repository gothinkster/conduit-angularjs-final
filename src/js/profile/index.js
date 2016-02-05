import angular from 'angular';

// Create the home module where our functionality can attach to
let profileModule = angular.module('app.profile', []);


// Controllers
import ProfileCtrl from './profile.controller';
profileModule.controller('ProfileCtrl', ProfileCtrl);


export default profileModule;
