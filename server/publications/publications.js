Meteor.publish("bmiCounts", function(){
  self = this;
  bmi = Weights.aggregate({$group: {}});
});