AFLT4.TweetsIndexRoute = Ember.Route.extend({
  model: function() {
    return AFLT4.Tweet.find();
  },
  
});
