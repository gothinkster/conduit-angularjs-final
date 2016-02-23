import angular from 'angular';

// Create the home module where our functionality can attach to
let componentsModule = angular.module('app.components', []);


// Components
import ArticlePreview from './article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleMeta from './article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import FollowBtn from './follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);


export default componentsModule;
