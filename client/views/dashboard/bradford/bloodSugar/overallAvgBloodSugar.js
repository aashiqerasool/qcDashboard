var remote = DDP.connect('http://strong-racer-47-166762.euw1-2.nitrousbox.com/');

Template.overallAvgWeight.helpers({
  overallWeightStats: function() {
    var overallStats;
    remote.call('latestUserWeight', function(error, result) {
      overallStats = result;
      Session.set("overallWeight", result);
      return;
    });
    return Session.get("overallWeight");
  },
    overallAvgWeight: function() {
    var overallStats;
    remote.call('overallAvgWeight', function(error, result) {
      overallAvgWeight = result;
      Session.set("overallAvgWeight", result);
      return;
    });
      var avgWeight = Session.get("overallAvgWeight").avgWeight;
    console.log(avgWeight.toFixed(2));
//     console.log(overallStats);
    return avgWeight.toFixed(2);
  }
});