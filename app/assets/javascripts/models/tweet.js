// for more details see: http://emberjs.com/guides/models/defining-models/
// .property means cache the result unless any of the values change

AFLT4.Tweet = DS.Model.extend({
  tweetText: DS.attr('string'),
  tweetCreatedAt: DS.attr('date'),
  tweetGuid: DS.attr('number'),
  tweetSource: DS.attr('string'),
  twitterUserId: DS.attr('number'),
  
  twitterUser: DS.belongsTo('AFLT4.TwitterUser'),
    
  originalTweetUrl: function() {
    var guid = this.get('tweetGuid');
    return "http://www.twitter.com/" + this.get('twitterUser.screenName') + "/status/" + guid;
  }.property('twitterUser.screenName', 'tweetGuid'),
  
  originalTweetUrlTwo: function() {
    return "http://www.twitter.com/" + this.get('twitterUser.screenName') + "/status/" + this.get('tweetGuid');
  }.property(),
    
});
