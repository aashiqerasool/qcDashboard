function buildAvgBmiChartReactive() {
    
    var data = new Array();
    
    data[0] = 0;
  Remote.call('oaAvgBmiHistory', function(error, result) {
      Session.set('bmiHistoryData', result);
    });

    var bmis = Session.get('bmiHistoryData');
    var dataset = [];
    var bmisOnly = [];
    var datesOnly = [];
    
     
    if(Session.get('bmiHistoryData') !== undefined){
    Session.get('bmiHistoryData').forEach(function(record) {
      var item = {
        "date": record.updatedAt,
        "avgBmi": record.avgBmi.toFixed(2)
      };

   
      dataset.push(item);
      bmisOnly.push(Math.round(record.avgBmi));
      console.log(bmisOnly);
      datesOnly.push(moment(record.updatedAt).format("DD/MM/YYYY"));
    
    });
    }
  
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
      buildAvgBmiChartReactive();
    });
}