(function($, v) {
  
  v.UserInfoForm = v.FormValidator.extend({
    
    el: "#user-info",
    
    bindingsHash: {
      "name"    : "#name",
      "age"     : "#age",
      "agreed"  : "#agreed",
      "bestPet" : "#best-pet"
    }
    
  });
  
})(jQuery, window.APP.Views);