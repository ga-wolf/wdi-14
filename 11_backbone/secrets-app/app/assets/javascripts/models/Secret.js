// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// A model is made to represent a single record of a database (i.e. a single User, a single Post - very similar to what we should see if we typed User.first in Rails)
app.Secret = Backbone.Model.extend({
  // Set the URL so that any instance of this model can communicate with the server
  // The way this works is very fancy!
  // var secret = new app.Secret({ content: "I put bleach in your coffee" });
  // secret.save();
    // If the instance of app.Secret doesn't have an ID attribute, it will make a POST request to /secrets
    // If the instance of app.Secret does have an ID attribute (given to us by Rails), it will send a PUT request to /secrets/:id (/secrets/1)
  urlRoot: "/secrets",
  // When a new instance of app.Secret is created, make sure it has the following default values
  defaults: {
    content: ""
  },
  // Whenever an instance of app.Secret is created, run this function
  initialize: function () {
    console.log( "A new secret was created" );
  }
});
