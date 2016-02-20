import angular from 'angular';

// Create the home module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


// Services
import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

// TAG SERVICE

// Article.getFeed({ type: 'user', username: 'eric' })
// Feed.get({ type: 'user', username: 'eric' })
/*
  Why auth in own folder but not article feeds?
  Auth setters only happen in one place, auth ctrl.
  Getters happen rarely, and most likely via User svc
  which will be in global services folder.
*/


export default servicesModule;
