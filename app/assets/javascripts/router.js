// For more information see: http://emberjs.com/guides/routing/

AFLT4.Router.map(function() {
  this.route("about");
  this.resource("collections", function() {
    });
  this.resource("users", function() {
    });
  this.resource("tweets", function() {
    });
});
