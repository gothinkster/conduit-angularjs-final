import angular from 'angular';

// Create the home module where our functionality can attach to
let authModule = angular.module('app.auth', []);


// Include our UI-Router config settings
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

// Controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

// Services
import AuthService from './auth.service';
authModule.service('Auth', AuthService);


export default authModule;
