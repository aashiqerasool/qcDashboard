Template.header.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['header'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    //return Meteor.user() ? 'user' : 'sign in';
    return Meteor.user() ? 'sign out' : 'sign in';
  }
});

Template['header'].events({
//   'click .resize.button' : function () {
//     var showLogin = Session.get('showLogin');

//     Session.set('isActive', !Session.get('isActive'));

//     setTimeout(function () {
//       Session.set('showLogin', !Session.get('showLogin'));
//     }, 600);
//   },
    'click .resize.button' : function () {
      if(Meteor.user()){
        Meteor.logout();   
      }
      else{Router.go('/signIn')}
  },
  'click .log-out.button' : function () {
    Meteor.logout();
  }
});

