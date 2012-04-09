(function($, v) {
  
  v.UserInfoForm = v.FormValidator.extend({
    
    el: "#user-info",
    
    events: {
      "change #name"     : "setName",
      "change #age"      : "setAge",
      "change #agreed"   : "setAgreed",
      "change #best-pet" : "setBestPet"
    },
    
    fieldSelectorMap: {
      "name"    : { selector: "#name",     updater: "updateTextField" },
      "age"     : { selector: "#age",      updater: "updateTextField" },
      "agreed"  : { selector: "#agreed",   updater: "updateCheckboxField" },
      "bestPet" : { selector: "#best-pet", updater: "updateSelectField" }
    },
    
    setName: function(e) {
      this.model.set("name", $(e.currentTarget).val());
    },
    
    setAge: function(e) {
      this.model.set("age", parseFloat($(e.currentTarget).val(), 10));
    },
    
    setAgreed: function(e) {
      this.model.set("agreed", e.currentTarget.checked);
    },
    
    setBestPet: function(e) {
      this.model.set("bestPet", $(e.currentTarget).val());
    }
  });
  
})(jQuery, window.APP.Views);