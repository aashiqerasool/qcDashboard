Template.weights.helpers({
  item: function () {
  return Weights.find();
},
  weightsCount: function () {
  return Weights.find().count();
},
//   weightsAverage: function() {
//     return Weights.avgWeight;
//   }
});