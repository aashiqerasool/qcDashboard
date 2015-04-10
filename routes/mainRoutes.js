// Home Route
Router.route('/', {name:'home'}, function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

// SignIn route
Router.route('/signIn', {name:'signIn'}, function () {
  this.render('signIn');
  SEO.set({ title: 'Sign In - ' + Meteor.App.NAME });
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
//overall avg routes
Router.route('/overall/all', function () {
  this.render('oaAllMetrics');
  SEO.set({ title: 'All Metrics Overall - ' + Meteor.App.NAME });
});

Router.route('/overall/bmi', function () {
  this.render('oaBmiShow');
  SEO.set({ title: 'Overall Average BMI - ' + Meteor.App.NAME });
});

Router.route('/overall/weight', function () {
  this.render('oaWeightShow');
  SEO.set({ title: 'Overall Average Weight - ' + Meteor.App.NAME });
});

Router.route('/overall/activity', function () {
  this.render('oaActivityShow');
  SEO.set({ title: 'Overall Average Activity - ' + Meteor.App.NAME });
});

Router.route('/bmi/oaBmiGraph', function () {
  this.render('oaBmiGraph');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});

Router.route('/bmi/reactiveAvgBmiGaugePC', function () {
  this.render('reactiveAvgBmiGaugePC');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});



//Search routes

Router.route('/search/byPCode/all', function () {
  this.render('searchByPCode');
  SEO.set({ title: 'Bradford Health Statistics - ' + Meteor.App.NAME });
});

Router.route('/search/byPCode/bmi', function () {
  this.render('searchBmiPCode');
  SEO.set({ title: 'Bradford BMI Statistics - ' + Meteor.App.NAME });
});

Router.route('/search/byPCode/weight', function () {
  this.render('searchWeightPCode');
  SEO.set({ title: 'Bradford Weight Statistics - ' + Meteor.App.NAME });
});

Router.route('/search/byPCode/activity', function () {
  this.render('searchActivityPCode');
  SEO.set({ title: 'Bradford Activity Statistics - ' + Meteor.App.NAME });
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