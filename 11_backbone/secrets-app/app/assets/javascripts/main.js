// var s1 = new app.Secret(); // This will use the default values
// var s2 = new app.Secret({
//   content: "I put bleach in your coffee"
// }); // Will overwrite the default values
//
// var secretsCollection = new app.Secrets([
//   s1,
//   s2
// ]);

// We can ask for information from the server because we specified a url attribute on the collection
  // Once that GET request to /secrets is done, call the following function
// secretsCollection.fetch().done(function () {
//   console.log( secretsCollection.toJSON() );
//
//   // Once all the secrets have been successfully received, find the one that is bleach related, and update it
//   var bleachSecret = secretsCollection.findWhere({
//     id: 1
//   });
//   bleachSecret.set({
//     content: "I put bleach in your coffee"
//   });
//   bleachSecret.save().done(function () {
//     console.log( "Bleach secret was saved" );
//   });
// });

// Create a new instance of the collection
  // It will set up the URL so we can fetch information
  // Add event handlers so that any time a secret is added into the collection, we will represent that on the page
app.secrets = new app.Secrets();

// Wait until the document is ready
$(document).ready(function () {

  // Create a new instance of the router
  app.router = new app.AppRouter();
  // Gets the router to start listening to client side URLs
  Backbone.history.start();

  // Wait until the secretsCollection has finished fetching
  app.secrets.fetch();

  // Polling
  window.setInterval(function () {
    app.secrets.fetch();
  }, 1000);

});
