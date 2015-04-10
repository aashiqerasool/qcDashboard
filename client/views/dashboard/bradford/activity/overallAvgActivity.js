Template.overallAvgActivity.helpers({
  overallActivityStats: function() {
    var overallStats;
    Remote.call('latestUserActivity', function(error, result) {
      overallStats = result;
      Session.set("overallActivity", result);
      return;
    });
    return Session.get("overallActivty");
  },
    overallAvgActivity: function() {
    var overallStats;
    Remote.call('overallAvgActivity', function(error, result) {
      overallAvgActivity = result;
      Session.set("overallAvgActivity", result);
      return;
    });
      var avgActivity = Session.get("overallAvgActivity").avgActivity;
    console.log(avgActivity.toFixed(2));
//     console.log(overallStats);
    return avgActivity.toFixed(2);
  }
});