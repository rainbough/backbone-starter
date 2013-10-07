(function () {

  var bookTemplateHtml = $('#templates .book').html();
  var bookTemplate = _.template(bookTemplateHtml);

  window.BookView = Backbone.View.extend({
    className: 'book',
    events: {
      'click .buy': 'buy'
    },
    buy: function () {
      // TODO
      confirm("Confirm Book Purchase?");
      console.log("The " + this.model.get('title') + " was purchased.");
    },
    render: function () {
      var newBookHtml = bookTemplate( this.model.toJSON() );
      $(this.el).html(newBookHtml);
    }
  });

})();
