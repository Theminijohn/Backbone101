// Person Model
var Person = Backbone.Model.extend({
  // The default values
  defaults: {
    name: 'The Mini John',
    age: 23,
    occupation: 'Worker'
  }
});

// A List of People (Collection)
var PeopleCollection = Backbone.Collection.extend({
  // What type of model are we working with
  model: Person
});

// The View for a Person
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


var peopleCollection = new PeopleCollection([
  {
    name: 'Jeffrey Way',
    age: 27
  },
  {
    name: "John Doe",
    age: 50,
    occupation: "Web Designer"
  },
  {
    name: "Sally Doe",
    age: 29,
    occupation: "Graphic Designer"
  }
]);

console.log(peopleCollection);