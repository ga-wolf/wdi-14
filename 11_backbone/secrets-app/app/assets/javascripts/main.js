// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// Create a new instance of the app.Secrets collection
//  This is what we will be using to ask for information (making our AJAX requests)
app.secrets = new app.Secrets();

$(document).ready(function () {
  // Make sure we are on a page that Backbone should be loaded on
  //  The element with the ID of main is only on our page in app/views/secrets/home.html.erb
  //  If we are on any other page, it won't continue running the function
  if ( $("#main").length === 0 ) {
    return;
  }
  // Create a new instance of the router
  app.router = new app.AppRouter();
  // This will get the instance of app.AppRouter to actually start listening to client-side URLs (the part of the URL that is after the hash sign)
  Backbone.history.start();
  // Make a get request to the URL attribute defined on the app.Secrets constructor
  //  In this case, this will be making an AJAX GET request, asking for JSON, to /secrets
  //  Every piece of information that comes back will be saved as an app.Secret model (as specified in the app.Secret constructor)
  //  This will also fire the add events on this particular instance of the secrets collection
  app.secrets.fetch();
  // Ask for information from the server every second (make a GET request to /secrets asking for JSON)
  //  Every new piece of information (every new secret that comes back) will be created as an instance of app.Secret, and will trigger the add event listener defined in the initialize method in the app.Secrets constructor
  window.setInterval(function () {
    app.secrets.fetch();
  }, 1000);
});
