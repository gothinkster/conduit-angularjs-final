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

import ArticleService from './article.service';
servicesModule.service('Article', ArticleService);

// TAG SERVICE

// Article.getFeed({ type: 'user', username: 'eric' })
// Feed.get({ type: 'user', username: 'eric' })


export default servicesModule;
