function buildAvgActivityChartReactive() {
    
    var data = new Array();
    
    data[0] = 0;
//     var bmi = Session.get('latestUserBmiByPCode')
//   console.log(bmi);
  Remote.call('oaAvgActivityHistory', function(error, result) {
      Session.set('activityHistoryData', result);
    });
//     OaAvgBmiHistory = new Meteor.Collection('oaAvgBmiHist', Remote);
//     Remote.subscribe('oaAvgBmiHistorySub');
    var activities = Session.get('activityHistoryData');
//     var bmis = OaAvgBmiHistory.find().fetch();
//     console.log(Session.get('bmiHistoryData'));
    var dataset = [];
    var activitiesOnly = [];
    var datesOnly = [];
    
     
    if(Session.get('activityHistoryData') !== undefined){
    Session.get('activityHistoryData').forEach(function(record) {
      var item = {
        "date": record.activityDate,
        "avgActivity": record.avgActivity.toFixed(2)
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      dataset.push(item);
      activitiesOnly.push(record.avgActivity);
      console.log(activitiesOnly);
      datesOnly.push(moment(record.activityDate).format("DD/MM/YYYY"));
    
    });
    }
  
//     if(Session.get("latestUserBmisByPCode") !== undefined)
//       data[0] = Math.round(Session.get("latestUserBmisByPCode").avgBmi);
      
//     if(Session.get('reactive') !== undefined)
//         data[0] = Session.get('reactive');
  
  console.log(data[0]);  
  
    $('#OaAvgActivityLine').highcharts({
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Overall Average Activity',
        align: 'center',
        x: -20 //center
      },
      subtitle: {
        text: '',
        margin: 30,
        x: -20
      },
      xAxis: {
        categories: datesOnly,
        //             labels: {
        //               align

        //           }
        //           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Average Activity (Hours)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: 'Hours'
      },
      legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'bottom',
        floating: false,
        margin: 15,
        borderWidth: 0
      },
      series: [{
        name: 'Overall Average Activity Daily',
        data: activitiesOnly
      }]
    });
}




Template.oaAvgActivityLine.rendered = function () {
    this.autorun(function (c) {
//       console.log(Session.get('latestUserBmisByPCode'));  
      buildAvgActivityChartReactive();
    });
}