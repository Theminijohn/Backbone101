(function() {

  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  window.template = function(id) {
    return _.template( $('#' + id).html() );
  };


  // Person Model
  App.Models.Person = Backbone.Model.extend({
    // The default values
    defaults: {
      name: 'The Mini John',
      age: 23,
      occupation: 'Worker'
    }
  });

  // A List of People (Collection)
  App.Collections.People = Backbone.Collection.extend({
    // What type of model are we working with
    model: App.Models.Person
  });

  // The View for all People
  App.Views.People = Backbone.View.extend({
    tagName: 'ul',

    render: function() {
      // filter through all items in collection
      this.collection.each(function(person) {
        // for each, create a new PersonView
        var personView = new App.Views.Person({model: person});

        // append to root element
        this.$el.append(personView.render().el);


      }, this);

      // always return this from render method
      return this;


    }
  });

  // The View for a Person
  App.Views.Person = Backbone.View.extend({

    // Overwriting Tags
    tagName: 'li',
    className: 'person',
    id: 'some-person',

    // Templating Engine
    template: template('personTemplate'),


    // Rendering (to output)
    render: function() {
      // Rendering the Template
      this.$el.html( this.template(this.model.toJSON()) );
      return this; // always return this from render methods
    }

  });


  var peopleCollection = new App.Collections.People([
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

  var peopleView = new App.Views.People({ collection: peopleCollection});

  $(document.body).append(peopleView.render().el);


})();