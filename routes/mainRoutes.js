// Home Route
Router.route('/', {name:'home'}, function () {
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

Router.route('/playground', function () {
  this.render('playground');
  SEO.set({ title: 'Playground - ' + Meteor.App.NAME });
});

Router.route('/bradfordStats', function () {
  this.render('bradfordStats');
  SEO.set({ title: 'Bradford Health Statistics - ' + Meteor.App.NAME });
});

Router.route('/bmi/searchByPCode', function () {
  this.render('searchBmiPCode');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});

Router.route('/bmi/oaBmiGraph', function () {
  this.render('oaBmiGraph');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});

Router.route('/bmi/reactiveAvgBmiGaugePC', function () {
  this.render('reactiveAvgBmiGaugePC');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});

Router.route('/weight/searchByPCode', function () {
  this.render('searchWeightPCode');
  SEO.set({ title: 'Bradford Weight Statistics - ' + Meteor.App.NAME });
});

Router.route('/search/searchByPCode', function () {
  this.render('searchByPCode');
  SEO.set({ title: 'Bradford Health Statistics - ' + Meteor.App.NAME });
});

Router.map(function() {
  this.route('bmiByPostCode', {
    path: '/bmiByPostCode/:postCode',
    data: function(){
      console.log(this.params.postCode);
      Session.set('bmiSearchPCVal', this.params.postCode);
    }
  });
});

Router.map(function() {
  this.route('avgWeightByPostCode', {
    path: '/avgWeightByPostCode/:postCode',
    data: function(){
      console.log(this.params.postCode);
      Session.set('avgWeightSearchPCVal', this.params.postCode);
    }
  });
});

Router.map(function() {
  this.route('searchByPCode', {
    path: '/search/searchByPCode/:postCode',
    data: function(){
      console.log(this.params.postCode);
      Session.set('avgWeightSearchPCVal', this.params.postCode);
      Session.set('bmiSearchPCVal', this.params.postCode);
    }
  });
});
// Router.route('/maps/map', {name: 'map'});


// Router.onBeforeAction(function() {
//   GoogleMaps.load();
//   this.next();
// }, { only: ['map'] });