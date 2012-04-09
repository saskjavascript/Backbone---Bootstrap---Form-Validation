(function($, APP, m) {
  
  m.User = Backbone.Model.extend({
    
    initialize: function() {
      _.bindAll(this);
    },

    defaults: {
      name: "Roy",
      age:  21,
      agreed: undefined,
      bestPet: "dog"
    },
    
    validate: function(attrs) {
      if(attrs.name.toLowerCase() === "bob") {
        return "name";
      }
      
      if(attrs.age <= 0 || attrs.age > 100) {
        return "age";
      }
      
      if(attrs.agreed === false) {
        return "agreed";
      }
      
      if(attrs.bestPet !== "dog"){
        return "bestPet";
      }
      
      APP.trigger("valid:input");
    }
  });
    
})(jQuery, window.APP, window.APP.Models);