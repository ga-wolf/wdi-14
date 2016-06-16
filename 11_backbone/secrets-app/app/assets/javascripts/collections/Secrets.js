// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// Create a new collection that is meant to represent an entire database table
app.Secrets = Backbone.Collection.extend({
  // Explain to Backbone how to communicate with the server
    // Telling all instances of this collection that if you want all of the secrets, make a GET request to /secrets asking for JSON
    // The following code is now possible (if the Rails side is able to give back JSON):
      // app.secrets = new app.Secrets();
      // app.secrets.fetch()
  url: "/secrets",
  // Everything that gets added to an instance of this collection should be stored as an instance of app.Secret (this means that anything that is received by a fetch will be stored as an instance of Secret)
  model: app.Secret,
  // As soon as an instance of this collection is created, it will run the initialize method
  initialize: function () {
    // console.log( "An instance of the app.Secrets collection was just created" );
    // Every time that something is added to an instance of this collection, it will fire this run the function that is passed in here
      // This add event will run in a couple of cases
        // When someone calls app.secrets.fetch();
          // (if there is new data)
        // And, when someone calls app.secrets.add( someSecret );
    this.on("add", function (secret) {
      // console.log( "A new app.Secret was just added to an instance of the app.Secrets collection. It's content was this: " + secret.get("content") );
      // Create a new instance of the app.SecretView making sure you pass it the data that it needs to represent
        // Views should only represent one piece of data!
      var secretView = new app.SecretView({
        model: secret
      });
      // Call render on this so we actually see the result on the page
      secretView.render();
    });
  }
});
