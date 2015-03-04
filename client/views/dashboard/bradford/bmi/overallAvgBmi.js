var remote = DDP.connect('http://strong-racer-47-166762.euw1-2.nitrousbox.com/');

Template.overallAvgBmi.helpers({
  overallBmiStats: function() {
    var overallStats;
    remote.call('latestUserBmis', function(error, result) {
      overallStats = result;
      Session.set("overallBmi", result);
      return;
    });
//     var data = Session.get("oStats");
//     var dataset = [];    
//     data.forEach(function(dat) {
//       dataset.push(dat.bmi);
//     });
//        console.log(dataset);
//     console.log(Session.get("overallBmi"));
//     console.log(overallStats);
    return Session.get("overallBmi");
  },
  overallAvgBmi: function() {
    var overallStats;
    remote.call('overallAvgBmi', function(error, result) {
      overallAvgBmis = result;
      Session.set("overallAvgBmis", result);
      return;
    });
//     remote.call('latestUserBmisByPCode', "bd8 9pn", function(error, result) {
//       //         overallAvgBmis = result;
//       Session.set("latestUserBmisByPCode", result);
//       return;
//     });
//     var data = Session.get("oStats");
//     var dataset = [];    
//     data.forEach(function(dat) {
//       dataset.push(dat.bmi);
//     });
//        console.log(dataset);
      var avgBmi = Session.get("overallAvgBmis").avgBmi;
//       var sAvgBmiByPCode = Session.get("latestUserBmisByPCode").avgBmi;
      
    console.log(avgBmi.toFixed(2));
//     console.log("Average BMI by Post Code " + sAvgBmiByPCode);
//     console.log(overallStats);
    return avgBmi.toFixed(2);
  }
});




// Template.overallAvgBmi.rendered = function () {
// var data = {
//   labels: ['Bananas', 'Apples', 'Grapes'],
//   series: [20, 15, 40]
// };

// var options = {
//   labelInterpolationFnc: function(value) {
//     return value[0]
//   }
// };

// var responsiveOptions = [
//   ['screen and (min-width: 640px)', {
//     chartPadding: 30,
//     labelOffset: 100,
//     labelDirection: 'explode',
//     labelInterpolationFnc: function(value) {
//       return value;
//     }
//   }],
//   ['screen and (min-width: 1024px)', {
//     labelOffset: 80,
//     chartPadding: 20
//   }]
// ];

// new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
// };