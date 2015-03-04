Template.searchWeightPCode.rendered = function() {
  Session.setDefault('avgWeightSearchPCVal', null);
};

Template.searchWeightPCode.events({
  'click #searchButton': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('avgWeightSearchPCVal', searchTerm);
//     var searchTerm = event;
    console.log('Search button clicked: '+ searchTerm);
    console.log('Session Value is '+ Session.get('avgWeightSearchPCVal'));
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