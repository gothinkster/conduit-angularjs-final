import angular from 'angular';

// Create the write module where our functionality can attach to
let writerModule = angular.module('app.writer', []);

// Include our UI-Router config settings
import WriterConfig from './writer.config';
writerModule.config(WriterConfig);


// Controllers
import WriterCtrl from './writer.controller';
writerModule.controller('WriterCtrl', WriterCtrl);


export default writerModule;
