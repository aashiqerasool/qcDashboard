// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});
// Profile Route
Router.route('/profile', function () {
  this.render('profile');
  SEO.set({ title: 'Profile - ' + Meteor.App.NAME });
});
