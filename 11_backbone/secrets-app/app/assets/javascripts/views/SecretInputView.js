var app = app || {};

app.SecretInputView = Backbone.View.extend({
  events: {
    'click button' : 'createSecret',
    'keydown textarea' : 'checkForEnter'
  },

  checkForEnter: function ( event ) {
    // Check to see if the user hit the enter key
      // If they did, call the createSecret function
    app.ENTER_KEY = 13;
    if ( event.which === app.ENTER_KEY ) {
      event.preventDefault(); // Don't create the new line
      this.createSecret();
    }
  },

  createSecret: function () {
    console.log( "A secret should be created" );
    var secret = new app.Secret();

    var userContent = this.$el.find("textarea").val();
    secret.set({
      content: userContent
    });
    secret.save();
    app.secrets.add( secret );
    this.$el.find("textarea").val('').focus();

    // Create a new instance of app.Secret
    // Set the content to be the value that the textarea has
    // save the new instance
    // Add that into the collection
  },

  el: "#secretForm",

  render: function () {
    // console.log( "SecretInputView should just have been rendered", this );
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    this.$el.html( secretInputViewTemplate );
  }
});
