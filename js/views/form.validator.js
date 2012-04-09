(function($, v) {

  v.FormValidator = Backbone.View.extend({
  
    initialize: function() {
      _.bindAll(this);
      this.configureTooltips();
      this.bindChangeables();
      this.model.bind("error",  this.showFormError);
      APP.on("valid:input", this.clearFormValidationErrors);
    },
    
    bindChangeables: function() {
      // As of Backbone 0.9.0 You can now bind and trigger multiple spaced-delimited events at once. For example: model.on("change:name change:age", ...)
      // this emits a nice space-delimited string of multiple change events to bind at once.      
      var fields = _.map(this.fieldSelectorMap, function(val, key) {
        return "change:%s".replace("%s", key);
      }).join(" ");
      this.model.bind(fields, this.updateFields);
      this.model.bind(fields, this.enableSave);
    },
    
    clearFormValidationErrors: function() {
      $('*[rel=tooltip]').tooltip('hide').closest('.control-group').removeClass('error');
    },
    
    configureTooltips: function() {
      this.$('*[rel=tooltip]').tooltip({ placement: 'right', trigger: 'manual' });
    },
    
    showFormError: function(model, fieldInError) {
      var mapping = this.fieldSelectorMap[fieldInError];
      if(mapping) {
        $(mapping.selector).tooltip('show').closest('.control-group').addClass('error');
      }
    },
    
    updateTextField: function(selector, value) {
      $(selector).val(value).tooltip('hide');
    },
    
    updateCheckboxField: function(selector, value) {
      $(selector)[0].checked = value;
    },
    
    updateSelectField: function(selector, value) {
      this.updateTextField(selector, value);
    },
    
    updateFields: function(m) {
      _.each(m.changed, function(val, key) {
        var mapping = this.fieldSelectorMap[key];
        if(mapping) {
          this[mapping.updater](mapping.selector, val);
        }
      }, this);
    }
    
  });

})(jQuery, window.APP.Views);