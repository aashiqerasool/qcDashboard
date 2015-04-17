/* Template.updateProfile.rendered=function() {
    $('input').pickadate({
    	selectMonths: true,
    	selectYears: 160,
    	min: new Date(1900,1,1),
    	max: true
    });
} */

Template.updateProfile.helpers({
    pageName: function () {
    return "Update Profile";
  },
  users: function () {
    return Meteor.users;
  },
  user: function() {
    return Meteor.user();
  },
  userSchema: function () {
    return Schema.User;
  },
  options: function () {
  	return {
  		selectMonths: true,
    	selectYears: 160,
    	min: new Date(1900,1,1),
    	max: true
  	}
  }
});

AutoForm.addHooks(['updateProfileForm'], {
    onSuccess: function () {
      Router.go('/profile');
    }
  });