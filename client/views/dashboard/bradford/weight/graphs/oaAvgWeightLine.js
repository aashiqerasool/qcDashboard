function buildAvgWeightChartReactive() {
    
    var data = new Array();
    
    data[0] = 0;
//     var bmi = Session.get('latestUserBmiByPCode')
//   console.log(bmi);
  Remote.call('oaAvgWeightHistory', function(error, result) {
      Session.set('weightHistoryData', result);
    });
//     OaAvgBmiHistory = new Meteor.Collection('oaAvgBmiHist', Remote);
//     Remote.subscribe('oaAvgBmiHistorySub');
    var weights = Session.get('weightHistoryData');
//     var bmis = OaAvgBmiHistory.find().fetch();
//     console.log(Session.get('bmiHistoryData'));
    var dataset = [];
    var weightsOnly = [];
    var datesOnly = [];
    
     
    if(Session.get('weightHistoryData') !== undefined){
    Session.get('weightHistoryData').forEach(function(record) {
      var item = {
        "date": record.updatedAt,
        "avgWeight": record.avgWeight.toFixed(2)
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      dataset.push(item);
      weightsOnly.push(Math.round(record.avgWeight));
      console.log(weightsOnly);
      datesOnly.push(moment(record.updatedAt).format("DD/MM/YYYY"));
    
    });
    }
  
//     if(Session.get("latestUserBmisByPCode") !== undefined)
//       data[0] = Math.round(Session.get("latestUserBmisByPCode").avgBmi);
      
//     if(Session.get('reactive') !== undefined)
//         data[0] = Session.get('reactive');
  
  console.log(data[0]);  
  
    $('#OaAvgWeightLine').highcharts({
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Overall Average Weights\'s',
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
          text: 'Average Weight'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: 'KG'
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
        name: 'Overall Average Weight Daily',
        data: weightsOnly
      }]
    });
}




Template.oaAvgWeightLine.rendered = function () {
    this.autorun(function (c) {
//       console.log(Session.get('latestUserBmisByPCode'));  
      buildAvgWeightChartReactive();
    });
}