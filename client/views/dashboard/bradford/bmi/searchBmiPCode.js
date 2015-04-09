Template.searchBmiPCode.rendered = function() {
  Session.setDefault('bmiSearchPCVal', null);
  Session.setDefault("latestUserBmisByPCode", null);
};

Template.searchBmiPCode.events({
  'click #searchButton': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('bmiSearchPCVal', searchTerm);
//     var searchTerm = event;
    console.log('Search button clicked: '+ searchTerm);
    console.log('Session Value is '+ Session.get('bmiSearchPCVal'));
  },
  'keyup #searchTerm': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('bmiSearchPCVal', searchTerm);
//     var searchTerm = event;
//     console.log('Search button clicked: '+ searchTerm);
//     console.log('Session Value is '+ Session.get('bmiSearchPCVal'));
  }, 
});

