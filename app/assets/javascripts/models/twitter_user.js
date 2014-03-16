// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT4.TwitterUser = DS.Model.extend({
  name: DS.attr('string'),
  screenName: DS.attr('string'),
  userGuid: DS.attr('number'),
  profileBackgroundColour: DS.attr('string'),
  profileBackgroundImageUrl: DS.attr('string'),
  
  tweets: DS.hasMany('AFLT4.Tweet')
});
