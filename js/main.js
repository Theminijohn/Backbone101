(function() {

  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };

  var vent = _.extend({}, Backbone.Events);

  App.Views.Appointments = Backbone.View.extend({
    initialize: function() {
      vent.on('appointment:show', this.show, this)
    },

    show: function(id) {
      var appointment = this.collection.get(id);
      new App.Views.Appointment({ model: appointment });

      $(document.body).append(appointmentView.render().el);
    }
  });

  console.log(vent);

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'appointment/:id': 'showAppointment'
    },

    index: function() {
      console.log('Hi there from the index page');
    },

    showAppointment: function(appointmentId) {
      vent.trigger('appointment:show', appointmentId)
    }


  });

  new App.Views.Appointments({collection: someCollection});

  new App.Router;
  Backbone.history.start();

})();