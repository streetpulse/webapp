//-------------------------------------
App.Router.map(function() {

    this.route('pulses');

   /* this.resource('pulse',function() {
      this.route('edit');
      this.route('new');
    });
*/

});


//-------------------------------------
//-------------------------------------

App.PulsesRoute = Ember.Route.extend({
 
    model: function() {
              //App.Pulse.find(1);
              return App.Pulse.find();
          }
    
});


App.IndexRoute = Ember.Route.extend({
 
    /*model: function() {
              return App.Pulse.find();
           },

    setupController: function(controller, model) {
              this.controllerFor('Pulses').set('model', model);
          }
*/

  redirect: function() {
    this.replaceWith('pulses');
  }

  

});
