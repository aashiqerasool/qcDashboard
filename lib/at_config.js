AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/profile',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Passwod"
      },
    },
});

AccountsTemplates.addFields([
  {
    _id: 'fName',
    type: 'text',
    displayName: 'First Name',
    placeholder: 'First Name'
  },
  {
    _id: 'lName',
    type: 'text',
    displayName: 'Last Name',
    placeholder: 'Last Name'
  },  
  {
  _id: 'dob',
  type: 'text',
  template: "atDob",
  displayName: "Date of Birth"
//   errStr: "You need to enter your Date of Birth to continue.",
//   func: function(value) {
//     return !value;
//   },
//   negativeValidation: false
  },
    {
    _id: 'userType',
    type: 'select',
    select: [
      {
        text: 'An Individual',
        value: 'An Individual'
      },
      {
        text: 'A Company/Organisation',
        value: 'A Company/Organisation'
      }, 
      {
        text: 'A part of an NHS Trust',
        value: 'A part of an NHS Trust'
      },
      {
        text: 'A part of a CCG',
        value: 'A part of a CCG'
      },
      {
        text: 'Other Healthcare Provider',
        value: 'Other Healthcare Provider'
      },
      {
        text: 'Other',
        value: 'Other'
      }
    ],
    displayName: 'I am:'
  },
  
]);