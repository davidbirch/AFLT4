// for more details see: http://emberjs.com/guides/models/defining-models/
// .property means cache the result unless any of the values change

AFLT4.User = DS.Model.extend({
  name: DS.attr('string'),
  screenName: DS.attr('string'),
  userGuid: DS.attr('number'),
  profileBackgroundColour: DS.attr('string'),
  profileBackgroundImageUrl: DS.attr('string'),
  
  collectionId: DS.attr('number'),
  collection: DS.belongsTo('AFLT4.Collection'),
  
  tweets: DS.hasMany('AFLT4.Tweet'),
  
  twitterUrl: function() {
    return 'http://www.twitter.com/' + this.get('screenName');
  }.property('screenName')
  
});
