// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event){
  chartW = createWaterLevelChart();
}

//Create Water Level Chart
function createWaterLevelChart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-waterLevel',
      type: 'spline'  
    },
    series: [{
      name: 'Timestamp'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#50b8b4' 
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Water Level (cm)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}