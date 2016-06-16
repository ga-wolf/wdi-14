// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// Routers are the way that Backbone manages "state" in an application
// It only deals with hash navigation (the things after the # sign in the URL)
  // It means we can send links and it will go to the appropriate content
  // It means we can go back and forward
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // If there is nothing after the hash sign (or there is no hash sign) - call the index function defined below
    'flights/:id': 'showFlight' // If the client-side URL matches #flights/:id (e.g. #flights/3 or #flights/19) - call the showFlight function, making sure to provide the dynamic part of this URL as the first argument in the showFlight function
  },
  showFlight: function (id) {
    // Receive the id from the dynamic part of the client-side URL
      // If someone goes to #flights/3, the number 3 will stored in the id variable
    console.log( id );
    // Once we have an instance of a flights collection for example
      // We can use this ID to show a specific flight
        // app.flights.get( id )
        // This is very similar to the way that we did this in Ruby - Flight.find params[:id]
  },
  index: function () {
    console.log( "Empty client-side URL, index method ran" );
    // Create a new instance of the app.AppView()
    var appView = new app.AppView();
    // And then render it so that we can actually see the view on the page
    // Remember that the AppView should just render placeholders so that other views can be loaded on to the page
    appView.render();
  }
});
