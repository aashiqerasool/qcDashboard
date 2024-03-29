//https://github.com/jhuenges/highcharts-demo/blob/master/client/demos/gaugeReactiveDemo.js

function buildAvgWeightGaugeReactive() {
    
    var data = new Array();
    
    data[0] = 0;
    var weight = Session.get('latestUserWeightsByPCode')
  console.log(weight);
    if(Session.get("latestUserWeightsByPCode") !== undefined)
      data[0] = Math.round(Session.get("latestUserWeightsByPCode").avgWeight);
      
//     if(Session.get('reactive') !== undefined)
//         data[0] = Session.get('reactive');
  
  console.log(data[0]);  
  
    $('#container-pcAvgWeight-gauge-reactive').highcharts({
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Weight'
            },

            stops: [
                [0.1, '#DF5353'],
                [0.5, '#DDDF0D'],
                [0.9, '#55BF3B']
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Average Weight (KG)',
            data: data,
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:20px;color:#7e7e7e">{y}</span><br/>' +
                    '<span style="font-size:9px;color:silver">Average Weight (KG)<br> (approx.)</span></div>'
            },
            tooltip: {
                valueSuffix: 'KG'
            }
        }]
    });
}


/*
 * Call the function to built the chart when the template is rendered
 */
Template.reactiveAvgWeightGaugePC.rendered = function () {
    this.autorun(function (c) {
      console.log(Session.get("latestUserWeightsByPCode"));  
      buildAvgWeightGaugeReactive();
    });
}

/*
 * Template events
 */
Template.reactiveAvgWeightGaugePC.events = {
    
    'change #reactive': function (event, template) {
        var newValue = $(event.target).val();
        Session.set('reactive', parseInt(newValue));
    },
}