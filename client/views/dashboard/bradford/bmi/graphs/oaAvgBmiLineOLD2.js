// // //https://github.com/MaazAli/Meteor-HighCharts/issues/9
// //   var bmis = Session.get('bmiHistoryData');
// // //     var bmis = OaAvgBmiHistory.find().fetch();
// // //     console.log(Session.get('bmiHistoryData'));
// //     var dataset = [];
// //     var bmisOnly = [];
// //     var datesOnly = [];
 
// // function getData() {
// //   Remote.call('oaAvgBmiHistory', function(error, result) {
// //       Session.set('bmiHistoryData', result);
// //     });

// //   if(Session.get('bmiHistoryData') !== undefined){
// //     Session.get('bmiHistoryData').forEach(function(record) {
// //       var item = {
// //         "date": record.updatedAt,
// //         "avgBmi": record.avgBmi
// //       };
      
// // //       var item2 = {
// // //         "weight": weight.weight
// // //       };
   
// //       dataset.push(item);
// //       bmisOnly.push(record.avgBmi);
// //       datesOnly.push(moment(record.updatedAt).format("DD/MM/YYYY"));
    
// //     });
// //     }
// // }
// // function buildGraph() {
// //   return new Highcharts.Chart({
// //     chart: {
// //               renderTo: 'OaAvgBmiLine',
// //               plotBackgroundColor: null,
// //               plotBorderWidth: null,
// //               plotShadow: false
// //           },
// //           title: {
// //               text: 'Overall Average BMI\'s',
// //               align: 'center',
// //               x: -20 //center
// //           },
// //           subtitle: {
// //               text: '',
// //             margin: 30,
// //               x: -20
// //           },
// //           xAxis: {
// //               categories: datesOnly,
// //   //             labels: {
// //   //               align

// //   //           }
// //   //           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// //   //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// //           },
// //           yAxis: {
// //               title: {
// //                   text: 'BMI'
// //               },
// //               plotLines: [{
// //                   value: 0,
// //                   width: 1,
// //                   color: '#808080'
// //               }]
// //           },
// //           tooltip: {
// //               valueSuffix: ''
// //           },
// //           legend: {
// //               layout: 'vertical',
// //               align: 'center',
// //               verticalAlign: 'bottom',
// //               floating: false,
// //               margin: 15,
// //               borderWidth: 0
// //           },
// //           series: [{
// //               name: 'Overall Average BMI\'s Daily',
// //               data: bmisOnly
// //           }]
// //       });
// //   }
// Template.oaAvgBmiLine.rendered = function() {
//   Session.setDefault('biHistoryData', null);
// //   var graph = buildGraph();
//   this.autorun(function() {
// //     graph.series[0].setData.
//       Remote.call('oaAvgBmiHistory', function(error, result) {
//       Session.set('bmiHistoryData', result);
//     });
//   });
// };
// Template.oaAvgBmiLine.helpers({
//   oaAvgBmiLine: function() {
    
//   },
//   oaAvgBmiHistChart: function() {
//     Remote.call('oaAvgBmiHistory', function(error, result) {
//       Session.set('bmiHistoryData', result);
//     });
// //     OaAvgBmiHistory = new Meteor.Collection('oaAvgBmiHist', Remote);
// //     Remote.subscribe('oaAvgBmiHistorySub');
//     var bmis = Session.get('bmiHistoryData');
// //     var bmis = OaAvgBmiHistory.find().fetch();
// //     console.log(Session.get('bmiHistoryData'));
//     var dataset = [];
//     var bmisOnly = [];
//     var datesOnly = [];
    
     
//     if(Session.get('bmiHistoryData') !== undefined){
//     Session.get('bmiHistoryData').forEach(function(record) {
//       var item = {
//         "date": record.updatedAt,
//         "avgBmi": record.avgBmi
//       };
      
// //       var item2 = {
// //         "weight": weight.weight
// //       };
   
//       dataset.push(item);
//       bmisOnly.push(record.avgBmi);
//       datesOnly.push(moment(record.updatedAt).format("DD/MM/YYYY"));
    
//     });
//     }
// //     else{
// //       Tracker.flush();
// //     }
//   console.log(JSON.stringify(dataset));
//   var bmisAsJSON = JSON.stringify(dataset);
//   var bmisOnlyAsJSON = JSON.stringify(bmisOnly);  
//   console.log(datesOnly);  
//     graphObject = {
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false
//       },
//       title: {
//         text: 'Overall Average BMI\'s',
//         align: 'center',
//         x: -20 //center
//       },
//       subtitle: {
//         text: '',
//         margin: 30,
//         x: -20
//       },
//       xAxis: {
//         categories: datesOnly,
//         //             labels: {
//         //               align

//         //           }
//         //           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//       },
//       yAxis: {
//         title: {
//           text: 'BMI'
//         },
//         plotLines: [{
//           value: 0,
//           width: 1,
//           color: '#808080'
//         }]
//       },
//       tooltip: {
//         valueSuffix: ''
//       },
//       legend: {
//         layout: 'vertical',
//         align: 'center',
//         verticalAlign: 'bottom',
//         floating: false,
//         margin: 15,
//         borderWidth: 0
//       },
//       series: [{
//         name: 'Overall Average BMI\'s Daily',
//         data: bmisOnly
//       }]
//     };
// //     if(Session.get('bmiHistoryData') !== undefined){
//     return graphObject;
// //     }
//   }});