// for more details see: http://emberjs.com/guides/models/defining-models/
// .property means cache the result unless any of the values change

AFLT4.Collection = DS.Model.extend({
    
    users: DS.hasMany('AFLT4.User'),
    tweets: DS.hasMany('AFLT4.Tweet')
});
