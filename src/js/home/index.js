import angular from 'angular';

// Create the home module where our functionality can attach to
let homeModule = angular.module('app.home', []);


// Controllers
import ExampleCtrl from './home.controller';
homeModule.controller('ExampleCtrl', ExampleCtrl);

// Components
import BoxComponent from './box.component';
homeModule.component('box', BoxComponent);

// Services
import NamesService from './names.service';
homeModule.service('Names', NamesService);


export default homeModule;