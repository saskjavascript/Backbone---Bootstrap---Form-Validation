(function(APP) {
  
  // a runtime object to cache instances
  var r = APP.Runtime = {};

  // models
  r.User = new APP.Models.User();

  // views
  r.UserInfo = new APP.Views.UserInfoForm({ model: r.User });
  
})(this.APP);