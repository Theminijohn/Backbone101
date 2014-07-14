var Person = Backbone.Model.extend({
  defaults: {
    name: 'The Mini John',
    age: 23,
    occupation: 'Worker'
  },

  work: function() {
    return this.get('name') + ' is working.'
  }

});