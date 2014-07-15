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
      'show': 'show'
    },

    index: function() {
      console.log('Hi there from the index')
    },

    show: function(){
      console.log('Hi there from the Show action')
    }
  });

  new App.Router;
  Backbone.history.start();

})();