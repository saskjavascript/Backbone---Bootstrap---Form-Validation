(function($, v) {

  v.FormValidator = Backbone.View.extend({
  
    initialize: function() {
      _.bindAll(this);
      this.configureTooltips();
      this.model.bind("error",  this.showFormError);
      this.modelBinder = new Backbone.ModelBinder();
      this.modelBinder.bind(this.model, this.el, this.bindingsHash);
      APP.on("valid:input", this.clearFormValidationErrors);
    },
    
    clearFormValidationErrors: function() {
      $('*[rel=tooltip]').tooltip('hide').closest('.control-group').removeClass('error');
    },
    
    configureTooltips: function() {
      this.$('*[rel=tooltip]').tooltip({ placement: 'right', trigger: 'manual' });
    },
    
    showFormError: function(model, fieldInError) {
      var selector = this.bindingsHash[fieldInError];
      if(selector) {
        $(selector).tooltip('show').closest('.control-group').addClass('error');
      }
    }
    
  });

})(jQuery, window.APP.Views);