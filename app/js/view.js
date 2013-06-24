


// create collection of users


var AtaCodes = Backbone.Collection.extend({
url: 'http://dev.mymxlog.com/api/ata'
});

var AtaCodeListList = Backbone.View.extend({
  el: '.page',
  render: function() {
		var users = new AtaCodes();
		users.fetch({
			success: function () {
			this.$el.html('CONTENT!!!');
			}
		});
  }
});



var Router = Backbone.Router.extend({
	 routes: {
          '':'home'	
	 }

});

// render view
var userlist = new AtaCodeListList();


var router = new Router();
router.on('route:home', function () {
  console.log('home page loaded');
  userlist.render();
});
Backbone.history.start();