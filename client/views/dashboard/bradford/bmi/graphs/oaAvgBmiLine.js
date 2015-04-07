function buildAvgBmiChartReactive() {
    
    var data = new Array();
    
    data[0] = 0;
//     var bmi = Session.get('latestUserBmiByPCode')
//   console.log(bmi);
  Remote.call('oaAvgBmiHistory', function(error, result) {
      Session.set('bmiHistoryData', result);
    });
//     OaAvgBmiHistory = new Meteor.Collection('oaAvgBmiHist', Remote);
//     Remote.subscribe('oaAvgBmiHistorySub');
    var bmis = Session.get('bmiHistoryData');
//     var bmis = OaAvgBmiHistory.find().fetch();
//     console.log(Session.get('bmiHistoryData'));
    var dataset = [];
    var bmisOnly = [];
    var datesOnly = [];
    
     
    if(Session.get('bmiHistoryData') !== undefined){
    Session.get('bmiHistoryData').forEach(function(record) {
      var item = {
        "date": record.updatedAt,
        "avgBmi": record.avgBmi.toFixed(2)
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      dataset.push(item);
      bmisOnly.push(Math.round(record.avgBmi));
      console.log(bmisOnly);
      datesOnly.push(moment(record.updatedAt).format("DD/MM/YYYY"));
    
    });
    }
  
//     if(Session.get("latestUserBmisByPCode") !== undefined)
//       data[0] = Math.round(Session.get("latestUserBmisByPCode").avgBmi);
      
//     if(Session.get('reactive') !== undefined)
//         data[0] = Session.get('reactive');
  
  console.log(data[0]);  
  
    $('#OaAvgBmiLine').highcharts({
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Overall Average BMI\'s',
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
          text: 'BMI'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: ''
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
        name: 'Overall Average BMI\'s Daily',
        data: bmisOnly
      }]
    });
}




Template.oaAvgBmiLine.rendered = function () {
    this.autorun(function (c) {
//       console.log(Session.get('latestUserBmisByPCode'));  
      buildAvgBmiChartReactive();
    });
}