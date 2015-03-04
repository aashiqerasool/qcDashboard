// var remote = DDP.connect('http://178.62.44.227/');

var remote = DDP.connect('http://strong-racer-47-166762.euw1-2.nitrousbox.com/');
Weights = new Meteor.Collection('Weights', remote); 

remote.subscribe('Weights');
// remote.call('bmiAggrfx');
// remote.call("userBmi");

// BmiData = new Meteor.Collection('bmiStats', remote)
//remote.subscribe('weightsRemote');
// remote.subscribe('weightsAverage');
// console.log(Weights.find().count());
// Remote.subscribe("bmiData");

// Remote.subscribe("bmiStats");
// remote.call("userBmi", function(error, data) {
//   console.log(data[3].profile.bmi);
// });

// Bmistats = new Meteor.Collection('bmiStats', remote);
// Remote.subscribe("directBmiStatsAggr", function() {
//   var testItems = Bmistats.find();
// //   console.logs(testItems);
// });

Template.ddpTest.helpers({
  item: function () {
    return Weights.find();
},
  bmi: function () {
    var bmiobj;
    var bmi;
    return remote.call("userBmi");
//     remote.call("userBmi", function(error, data) {
//       bmiobj = data[3];
//       return bmi;
//     return data[3].profile.bmi;
//   });
//     console.log(bmiobj);
//     return bmiobj;
}  
});

// Remote.call("bmiStatistics", function(error,result){
//   if (result){
//     console.log(result);
//   }
// });
