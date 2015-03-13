Template.playground.helpers({
  chartistPieTest1: function () {
    var data = {
  series: [5, 3, 4]
    };

    var sum = function(a, b) { return a + b; };

new Chartist.Pie('.ct-chart', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
  },
  WeightsTest: function() {
    console.log(Weights.find().fetch());
    return Weights.find().fetch();
  }
})