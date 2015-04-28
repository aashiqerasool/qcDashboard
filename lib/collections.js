Remote = DDP.connect('http://app.quantifiedcrowd.uk');
// Remote = DDP.connect('http://strong-racer-47-166762.euw1-2.nitrousbox.com/');


Schema = {};

Schema.UserProfile = new SimpleSchema({
    fName: {
        type: String,
        label: "First Name",
        regEx: /^[a-zA-Z-]{2,25}$/,
        
    },
    lName: {
        type: String,
        label: "Last Name",
        regEx: /^[a-zA-Z]{2,25}$/,
       
    },
    gender: {
        type: String,
        label: "Gender",
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    dob: {
        type: Date,
        label: "Date of Birth",
        optional: true,
      autoform: {
        type: "pickadate",
        pickadateOptions: function () {
        	return {
        		selectMonths: true,
    			selectYears: 160,
    			min: new Date(1900,1,1),
    			max: true
    			}
    		}

//         pickadateOptions: "options"
      }, 
    },
      userType: {
        type: String,
        label: "User Type",
        optional: true,
      autoform: {
        type: "select",
        options: function () {
          return [
            {label: 'An Individual',value: 'Individual'},
            {label: 'A Company/Organisation',value: 'Company/Organisation'}, 
            {label: 'A part of an NHS Trust',value: 'part of an NHS Trust'},
            {label: 'A part of a CCG',value: 'part of a CCG'},
            {label: 'Other Healthcare Provider',value: 'Other Healthcare Provider'},
            {label: 'Other',value: 'Other'}
          ];
        }
      }, 
    },
});
// Schema.UserProfile.clean();



Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
      optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);