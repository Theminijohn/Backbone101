var Person = Backbone.Model.extend({

  // The default values
  defaults: {
    name: 'The Mini John',
    age: 23,
    occupation: 'Worker'
  },

  // Validation (Will trigger when setting an attribute)
  validate: function(attrs) {
    if (attrs.age < 0) {
      return 'Age must be positive, stupid!';
    }

    if (!attrs.name) {
      return 'Every Person must have a Name, fool!';
    }
  },

  // Adding a Function
  work: function() {
    return this.get('name') + ' is working.'
  }

});