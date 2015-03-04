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

Router.route('/ddpTest', function () {
  this.render('ddpTest');
  SEO.set({ title: 'ddptest - ' + Meteor.App.NAME });
});

Router.route('/weights', function () {
  this.render('weights');
  SEO.set({ title: 'Weights - ' + Meteor.App.NAME });
});

// Router.route('/playground', function () {
//   this.render('playground');
//   SEO.set({ title: 'Playground - ' + Meteor.App.NAME });
// });

Router.route('/bradfordStats', function () {
  this.render('bradfordStats');
  SEO.set({ title: 'Bradford Health Statistics - ' + Meteor.App.NAME });
});



// Router.route('/maps/map', {name: 'map'});


// Router.onBeforeAction(function() {
//   GoogleMaps.load();
//   this.next();
// }, { only: ['map'] });