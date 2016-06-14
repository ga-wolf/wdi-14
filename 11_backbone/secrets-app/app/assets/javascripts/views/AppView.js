var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main", // Reference an existing element with the ID of main

  render: function () {
    console.log( "App view should be rendered now" );
    var appViewTemplate = $("#appViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword ` this `
    this.$el.html( appViewTemplate );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();

    // Create a new instance of something called the SecretInputView which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate onto the page - this should be put in the div with the ID of secretForm

    // Create the file
    // Make sure app is defined
    // Create the factory or constructor (extend Backbone.View)
      // el: "#secretForm"
      // We will need a render method
    // Create the instance
    // Call render on the instance


  }
});
