(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
      
      var shirts = this.options.shirts;
      for (var i=0; i<shirts.length; i+=1){
          if (type === 'small'){
            var small_shirts = shirts[i].get('small');
            shirts[i].set({small: small_shirts + 1});
            console.log("small shirt inventory:" +  shirts[i].get('small'));
            
          }
          else if (type === 'medium'){
            var medium_shirts = shirts[i].get('medium');
            shirts[i].set({medium: medium_shirts + 1});
            console.log("medium shirt inventory:" +  shirts[i].get('medium'));
           

          }
          else if (type === 'large'){
           var large_shirts = shirts[i].get('large');
            shirts[i].set({large: large_shirts + 1});
            console.log("large shirt inventory:" +  shirts[i].get('large'));

          }
      }
    }
   
  });

})();
