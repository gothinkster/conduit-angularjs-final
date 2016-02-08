import angular from 'angular';

// Create the home module where our functionality can attach to
let componentsModule = angular.module('app.components', []);


// Components
import ArticlePreview from './article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);


export default componentsModule;
