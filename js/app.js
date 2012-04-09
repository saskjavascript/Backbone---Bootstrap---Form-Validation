(function(w) {
  
  // a spot to store things
  var APP = {
    Views: {},
    Models: {}
  };
  
  // for custom events
  _.extend(APP, Backbone.Events);
  
  // stick it on the global scope  
  w.APP = APP;
  
})(this);