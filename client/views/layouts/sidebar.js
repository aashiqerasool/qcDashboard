Template.sidebar.helpers({
  
})


Template.sidebar.events({
  'click #homeBtn': function (event) {
    $('.sidebar').sidebar('toggle');
  }
})