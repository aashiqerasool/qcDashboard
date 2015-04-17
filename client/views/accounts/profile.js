// Handlebars.registerHelper("prettifyDate", function(timestamp) {
//      var date = new Date(timestamp);
//      return date.toString("dd-MM-yyyy");
// });

Template.profile.helpers({
    pageName: function () {
    return "Profile"
  },
  firstName: function() {
    return Meteor.user().profile.fName;
  },
  lastName: function() {
    return Meteor.user().profile.lName;
  },
  gender: function() {
//     if(!Meteor.user().profile.gender){
//       return "<a href=\"/updateProfile\">Update gender</a>";
//     }
    return Meteor.user().profile.gender;
  },
  userType: function() {
    //     if(!Meteor.user().profile.gender){
    //       return "<a href=\"/updateProfile\">Update gender</a>";
    //     }
    return Meteor.user().profile.userType;
  },
  age: function() {
    var dob = new Date(Meteor.user().profile.dob);
    var dobFormatted = dob.toString("dd-MM-yyyy");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var dobYear = dob.getFullYear();
    var dobMonth = dob.getMonth();
    var ageYear = currentYear - dobYear;
    var ageMonth = currentMonth - dobMonth;
    console.log(currentMonth + " " + dobMonth);
    if (currentMonth <= dobMonth || currentMonth == dobMonth && currentDate.getDate() < dob.getDate()) {
      ageYear--;
    }
    
    if (ageMonth < 0) {
      ageMonth = Math.abs(ageMonth);
    }
    if (currentMonth < dobMonth) {
    ageMonth = 12 - ageMonth;
}
    var ageFull = ageYear + " years and " + ageMonth + " months old";
    var ageFullPrecise = ageYear + " years old";
//     var ageyr = moment(dob).twix(currentDate).length("years");
//     var lastBday = moment((currentYear-1)+"-"+dobMonth+"-"+dob.getDay(), "YYYY-MM-DD");
//     console.log(lastBday);
//     var agemonth = moment(lastBday).twix(dobMonth).length("months");
    if (ageMonth == 0) {
    return ageFullPrecise
    }
    else
    {
    	return ageFull
    }
//     return ageFull;
  }
});

