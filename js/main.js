(function() {

  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show',
      'download/:id*filename': 'download',
      'search/:query': 'search',
      '*other': 'default'
    },

    index: function() {
      console.log('Hi there from the index')
    },

    show: function(id){
      console.log('Show route for id of ' + id)
    },

    download: function(filename){
      console.log(filename)
    },

    search: function(query) {
      console.log(query)
    },

    default: function(other) {
      alert('Hmmm... not sure waht you need here? You accessed to: ' + other)
    }

  });

  new App.Router;
  Backbone.history.start();

})();