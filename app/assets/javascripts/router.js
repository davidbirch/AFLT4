// For more information see: http://emberjs.com/guides/routing/

AFLT4.Router.map(function() {
  this.route("about");
  this.resource("tweets", function() {
    });
  this.resource("twitter_users", function() {
    });
});
