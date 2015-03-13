// var conn = DDP.connect('http://strong-racer-47-166762.euw1-2.nitrousbox.com/');

// var OaAvBmiHistoryRem = new Meteor.Collection("oaAvgBmiHistoryRem", Remote);

// Remote.subscribe("oaAvgBmiHistoryPub");


// OaAvBmiHistoryRem.find().observe({
//   added: function(doc) {
//     console.log("added");
//     if(!OaAvgBmiHistory.findOne(doc._id)) {
//       OaAvgBmiHistory.insert(doc);
//     }
//   },
//   changed: function(doc) {
//     OaAvgBmiHistory.update(doc._id, {$set: doc});
//   },
//   removed: function(doc) {
//     OaAvgBmiHistory.remove(doc._id);
//   }
// });