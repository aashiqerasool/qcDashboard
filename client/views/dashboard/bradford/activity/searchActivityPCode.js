Template.searchActivityPCode.rendered = function() {
  Session.setDefault('avgActivitySearchPCVal', null);
};

Template.searchActivityPCode.events({
  'click #searchButton': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('avgActivitySearchPCVal', searchTerm);
//     var searchTerm = event;
    console.log('Search button clicked: '+ searchTerm);
    console.log('Session Value is '+ Session.get('avgActivitySearchPCVal'));
  },
    'keyup #searchTerm': function (event) {
    event.preventDefault();
    var searchTerm = $('#searchTerm').val();
    Session.set('avgActivitySearchPCVal', searchTerm);
//     var searchTerm = event;
//     console.log('Search button clicked: '+ searchTerm);
//     console.log('Session Value is '+ Session.get('bmiSearchPCVal'));
  }, 
});