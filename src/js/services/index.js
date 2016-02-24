import angular from 'angular';

// Create the home module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


// Services
import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);



export default servicesModule;
