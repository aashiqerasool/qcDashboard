Template.searchByPCodeInput.rendered = function() {
  Session.setDefault('searchPCVal', null);
};

Template.searchByPCodeInput.events({
  'click #searchButton': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('searchPCVal', searchTerm);
//     var searchTerm = event;
//     console.log('Search button clicked: '+ searchTerm);
    console.log('Session Value is '+ Session.get('searchPCVal'));
  },
    'keyup #searchTerm': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('bmiSearchPCVal', searchTerm);
    Session.set('avgWeightSearchPCVal', searchTerm);
//     var searchTerm = event;
//     console.log('Search button clicked: '+ searchTerm);
    console.log('Session Value is '+ Session.get('bmiSearchPCVal'));
  }, 
});