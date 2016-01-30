Parse.Cloud.define('hello', function(req, res) {
  res.success("Hi. I'm a Parse Server with an embedded Mongo DB");
});
