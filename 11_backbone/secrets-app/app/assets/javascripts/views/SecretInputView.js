// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

// The app.SecretInputView should just load the form onto the page
app.SecretInputView = Backbone.View.extend({
  el: "#secretForm", // Reference an existing element, the one with the ID of secretForm, this will define this.el (the pure DOM version - document.querySelector style) and this.$el if jQuery is defined
  // Add a series of events, all of these are scoped to the element with the ID of secretForm!
  events: {
    'click button' : 'createSecret', // If a button is clicked (that is within #secretForm), call the createSecret function
    'keydown textarea' : 'checkForEnter' // If someone types a character in the textarea (that is within #secretForm), call the checkForEnter function
  },
  // The checkForEnter function will run every single time there is a keydown in a textarea within #secretForm, make sure you receive the information about that event as the first parameter of this function
  checkForEnter: function ( event ) {
    // Each key has a keycode, see here - http://codepen.io/anon/pen/KMMpvE
      // The enter key has the value of 13, but we want our code to be readable
    app.ENTER_KEY = 13;
    // If the key that was pressed is the enter key
    if ( event.which === app.ENTER_KEY ) {
      // Don't put the new line in the text box
      event.preventDefault();
      // Then call the createSecret function
      this.createSecret();
    }
  },
  createSecret: function () {
    console.log( "A new instance of app.Secret should now be created" );
    var secret = new app.Secret();
    // Get the value out of the textarea (the thing the user has typed)
    var userContent = this.$el.find("textarea").val();
    // Update the secret's content so it doesn't have the default values defined in the app.Secret model
    secret.set({
      content: userContent
    });
    // Save this model
    //  If it doesn't have an ID attribute - which it doesn't - this will send a POST request to the urlRoot defined in the app.Secret model
    //  If it does have an ID attribute (meaning it was retrieved by the server), this will send a put request to the urlRoot + the id of the secret
    secret.save();
    // Add the secret that was just created into the instance of app.Secrets
    //  This will trigger the add event listener we wrote down in our app.Secrets file
    app.secrets.add( secret );
    // Set the textarea's value to be empty (so it just shows the placeholder text)
    // Then focus the cursor in the textarea (so we can type straight away)
    this.$el.find("textarea").val('').focus();
  },
  render: function () {
    // Access the HTML stored in the script tag on the page
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    // Set this.$el's HTML to be whatever came from the secretInputViewTemplate (defined by the el attribute in this object - in this case, the element with the ID of secretForm)
    this.$el.html( secretInputViewTemplate );
  }
});
