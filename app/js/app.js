'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = App || {};

App.initializeSkrollr = function(){
  
};

$(document).ready(function(){
  App.initializeSkrollr();
});
