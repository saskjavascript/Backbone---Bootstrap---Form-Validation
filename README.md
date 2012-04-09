# Backbone + Bootstrap Form Validation

Utilizes an extendable Backbone.js View, Model and Twitter Bootstrap 2.0 HTML Markup conventions to allow for a simple way to indicate form validation errors using Twitter bootstrap tooltips and some CSS.

![The concept in action](https://github.com/saskjavascript/Backbone---Bootstrap---Form-Validation/raw/master/img/in.action.png)

# Notes

This code is _not_ perfect. There are bugs; the idea is to present the idea of how to wrap bootstrap controls in backbone views/models and to prompt the viewer/reader to think about meta-programming.

There are numerous areas where more meta-programming could simplify the number of steps involved in getting this to work and make it more of a releasable stand-alone component. Pull requests accepted :)

# Usage

1) Create a new View Class that extends the FormValidator class:

```javascript
v.UserInfoForm = v.FormValidator.extend({
  el: "#user-info"
  ...
```

2) Add change tracking for the fields you wish to track and create simple setters.

```javascript
  events: {
    "change #name"     : "setName",
    "change #age"      : "setAge",
    "change #agreed"   : "setAgreed",
    "change #best-pet" : "setBestPet"
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
  ...
```

3) Add a fieldSelectorMap attribute that contains each model field mapped to the dom selector and an updater type depending on the field.
  
```javascript
  fieldSelectorMap: {
    "name"    : { selector: "#name",     updater: "updateTextField" },
    "age"     : { selector: "#age",      updater: "updateTextField" },
    "agreed"  : { selector: "#agreed",   updater: "updateCheckboxField" },
    "bestPet" : { selector: "#best-pet", updater: "updateSelectField" }
  }
  ...
````

4) Add rel="tooltip" and title attributes to the form nodes you will be tracking for validation, these are used by the FormValidator to drive messaging in the tooltips.

*Note:* You will need to adhere to the Twitter Bootstrap Markup patterns, this code is shortened for the sake of brevity.

```html
  <input type="text" class="input" id="name" rel="tooltip" title="Your name cannot be Bob." placeholder="anything but Bob will work">
  <input type="number" class="input-small" id="age" rel="tooltip" title="Age must be between 1 and 100." min="0" max="100" step="1" placeholder="> 0 < 100">
  <input type="checkbox" id="agreed" rel="tooltip" title="You must agree. NOW!">
  <select id="best-pet" rel="tooltip" title="Dogs are best!">
    <option value="">something</option>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="ferret">Ferret</option>
    <option value="lizard">Lizard</option>
  </select>
```

5) Create an Instance of your new View Class and pass it a reference to a Backbone Model that tracks the attributes in your form:

```javascript
  r.User = new APP.Models.User();
  r.UserInfo = new APP.Views.UserInfoForm({ model: r.User });
```

# Dependencies

1. [jQuery 1.7.2](http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js)
2. [Underscore.js 1.3.2](http://documentcloud.github.com/underscore/)
3. [Backbone.js 0.9.2](http://documentcloud.github.com/backbone/)
4. [Twitter Bootstrap (css + js for the tooltip dependencies) 2.0](http://twitter.github.com/bootstrap/)

# License / Usage

This code is made available free of charge. Do what you want with it :)
