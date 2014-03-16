// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT4.Tweet = DS.Model.extend({
  tweetText: DS.attr('string'),
  tweetCreatedAt: DS.attr('date'),
  tweetGuid: DS.attr('number'),
  tweetSource: DS.attr('string'),
  twitterUserId: DS.attr('number'),
  
  twitterUser: DS.belongsTo('AFLT4.TwitterUser')
});
