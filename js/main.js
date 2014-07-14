var Person = Backbone.Model.extend({
  // The default values
  defaults: {
    name: 'The Mini John',
    age: 23,
    occupation: 'Worker'
  }
});

// Views
var PersonView = Backbone.View.extend({

  // Overwriting Tags
  tagName: 'li',
  className: 'person',
  id: 'some-person',

  // Templating Engine
  // Can append HTML Tags
  template: _.template("<%= name %> (<%= age%>) - <%= occupation%>"),

  // On init
  initialize: function() {
    this.render();
  },

  // Rendering (to output)
  render: function() {
    // Anti-Pattern ->
    // this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation')) ;

    this.$el.html( this.template(this.model.toJSON()) );
  }

});

var person = new Person;
var personView = new PersonView({model: person})