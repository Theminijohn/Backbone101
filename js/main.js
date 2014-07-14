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
  template: _.template( $('#personTemplate').html() ),

  // On init
  initialize: function() {
    this.render();
  },

  // Rendering (to output)
  render: function() {
    // Anti-Pattern ->
    // this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation')) ;

    // Rendering the Template
    this.$el.html( this.template(this.model.toJSON()) );
  }

});

var person = new Person;
var personView = new PersonView({model: person})

// Not good...
var person2 = new Person({ name: "Someone", age: 38});
var personView2 = new PersonView({model: person2})