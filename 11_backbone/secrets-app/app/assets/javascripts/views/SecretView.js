// Make sure that an app object exists
  // Either use the existing app object
  // Or use a new, empty object
var app = app || {};

app.SecretView = Backbone.View.extend({
  // Instead of referencing an existing element, create a new list item
  //  This will still be saved in this.el and this.$el
  //  Remember you need to put it on the page!
  tagName: 'li',
  render: function () {
    // When this an instance of this view is created, it will be given a model to reference. Access the content attribute of the model that was given to it
    var secretContent = this.model.get("content");
    // Set the newly created li's text to be the content from the secret that was passed in
    this.$el.text( secretContent );
    // Put the new li at the start of the element with the ID of secrets
    this.$el.prependTo( "#secrets" );
  }
});
