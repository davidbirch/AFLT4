AFLT4.TweetsIndexRoute = Ember.Route.extend({
  model: function() {
    return AFLT4.Collection.find();
  },
  activate: function(){
    AFLT4.Pollster.start();
  },
  deactivate: function(){
    AFLT4.Pollster.stop();
  }
  
});

AFLT4.Pollster = {
  start: function(){
    this.timer = setInterval(this.onPoll.bind(this), 5000);
  },
  stop: function(){
    clearInterval(this.timer);
  },
  onPoll: function(){
    // call a refresh from the store here
    // AFLT4.Tweet.refresh();
    AFLT4.Collection.find();
  }
};
