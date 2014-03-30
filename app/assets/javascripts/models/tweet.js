// for more details see: http://emberjs.com/guides/models/defining-models/
// .property means cache the result unless any of the values change

AFLT4.Tweet = DS.Model.extend({
  tweetText: DS.attr('string'),
  tweetCreatedAt: DS.attr('date'),
  tweetGuid: DS.attr('number'),
  tweetSource: DS.attr('string'),
  userId: DS.attr('number'),
  
  user: DS.belongsTo('AFLT4.User'),
    
  originalTweetUrl: function() {
    var guid = this.get('tweetGuid');
    return "http://www.twitter.com/" + this.get('user.screenName') + "/status/" + guid;
  }.property('user.screenName', 'tweetGuid'),
  
});
