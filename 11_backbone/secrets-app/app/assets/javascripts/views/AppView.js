// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// This AppView should just render the basic template so that all of the other views can be loaded onto the page
app.AppView = Backbone.View.extend({
  el: "#main", // Reference an existing element, in this case the element with the ID of main. This is defined in app/views/secrets/home.html.erb (as are all of the templates)
  render: function () {
    console.log( "An instance of app.AppView has just been rendered" );
    // Get the HTML that is inside the element with the ID of appViewTemplate
      // Defined in app/views/secrets/home.html.erb
    var appViewTemplate = $("#appViewTemplate").html();
    // Set this.$el's current HTML to be whatever was in the script tag found above
    this.$el.html( appViewTemplate );

    // After the appView is on the page, we can start loading other views in there
    // Create a new instance of the app.SecretInputView
    var secretInputView = new app.SecretInputView();
    // Then render the secretInputView to the page (inside whatever element it defines or references)
    secretInputView.render();
  }
});
