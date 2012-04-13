# Backbone + Bootstrap + Form Validation

Utilizes he [Backbone ModelBinder plugin](https://github.com/theironcook/Backbone.ModelBinder), an extendable Backbone.js View (form.validator.js), a Backbone Model and Twitter Bootstrap 2.0 HTML Markup conventions to allow for a simple way to indicate form validation errors using Twitter bootstrap tooltips and some CSS.

![The concept in action](https://github.com/saskjavascript/Backbone---Bootstrap---Form-Validation/raw/master/img/in.action.png)

# Notes

This code is _not_ perfect. There are probably bugs; the idea is to present the idea of how to wrap bootstrap controls in backbone views/models and to prompt the viewer/reader to think about meta-programming.

Pull requests accepted :)

# Usage

1) Create a new View Class that extends the FormValidator class and includes the standard [Backbone ModelBinder plugin](https://github.com/theironcook/Backbone.ModelBinder) bindingsHash:

```javascript
v.UserInfoForm = v.FormValidator.extend({
  
  el: "#user-info"
  
  bindingsHash: {
    "name"     : "#name",
    "age"      : "#age",
    "agreed"   : "#agreed",
    "bestPet" : "#best-pet"
  }
  
});
```

2) Add rel="tooltip" and title attributes to the form nodes you will be tracking for validation, these are used by the FormValidator to drive messaging in the tooltips.

*Note:* This markup conforms to the [Twitter Bootstrap Markup patterns](http://twitter.github.com/bootstrap/base-css.html#forms).

```html
  <form id="user-info" class="form-horizontal">
    <fieldset>
      <legend>All About Me</legend>
      <div class="control-group">
        <label class="control-label" for="name">Your Name</label>
        <div class="controls">
          <input type="text" class="input" id="name" rel="tooltip" title="Your name cannot be Bob." placeholder="anything but Bob will work">
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="age">Your Age</label>
        <div class="controls">
          <input type="number" class="input-small" id="age" rel="tooltip" title="Age must be between 1 and 100." min="0" max="100" step="1" placeholder="> 0 < 100">
        </div>
      </div>            
      <div class="control-group">
        <label class="control-label" for="agreed">I agree to terms</label>
        <div class="controls">
          <label class="checkbox">
            <input type="checkbox" id="agreed" rel="tooltip" title="You must agree. NOW!">
          </label>
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="best-pet">The best pet is:</label>
        <div class="controls">
          <select id="best-pet" rel="tooltip" title="Dogs are best!">
            <option value="">something</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="ferret">Ferret</option>
            <option value="lizard">Lizard</option>
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </fieldset>
  </form>
```

3) Create an Instance of your new View Class and pass it a reference to a Backbone Model that tracks the attributes in your form:

```javascript
  var User     = new APP.Models.User();
  var UserInfo = new APP.Views.UserInfoForm({ model: User });
```

# Dependencies

1. [jQuery 1.7.2](http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js)
2. [Underscore.js 1.3.2](http://documentcloud.github.com/underscore/)
3. [Backbone.js 0.9.2](http://documentcloud.github.com/backbone/)
4. [Backbone ModelBinder plugin](https://github.com/theironcook/Backbone.ModelBinder)
5. [Twitter Bootstrap (css + js for the tooltip dependencies) 2.0](http://twitter.github.com/bootstrap/)

# License / Usage

This code is made available free of charge. Do what you want with it :)
