// from https://codepen.io/digital_ash/pen/mybxav

$(function () {
  Highcharts.setOptions({
    colors: ['rgba(255, 255, 255, 0.3)'],
    chart: {
        style: {
            fontFamily: 'sans-serif',
            color: '#fff',
            border: '1px solid white',
        }
    }
});
  $('#chart').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        title: {
            text: 'Weekly Averages',
            style: {
              color: '#fff'
            }
        },
        xAxis: {
            tickWidth: 0,
            labels: {
              style: {
                  color: '#fff',
                 }
              },
            categories: ['Dec 4', "Dec 11", "Dec 18", "Dec 25", "Jan 1", "Jan 8", "Jan 15", "Jan 22"]
            //categories: ['May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10', 'May 11']
        },
        yAxis: {
           gridLineWidth: .5,
		      gridLineDashStyle: 'dash',
		      gridLineColor: 'white',
           title: {
                text: '',
                style: {
                  color: '#fff'
                 }
            },
            min: 87,
            max: 93,
            labels: {
              formatter: function() {
                        return Highcharts.numberFormat(this.value, 0, '', ',')+'%';
                    },
              style: {
                  color: '#fff',
                },
              gridLineWidth: 1
              }
            },
        legend: {
            enabled: false,
        },
        navigation: {
          menuItemHoverStyle: {color: "lime"}
        },
        credits: {
            enabled: false
        },
        tooltip: {
           valuePrefix: '%'
        },
        plotOptions: {
		      column: {
			      borderRadius: 2,
             pointPadding: 0,
			      groupPadding: 0.1
            }
		    },
        series: [{
            name: 'Grades',
            data: [89, 88, 89, 89, 92, 91, 91, 92]
        }]
    });
});
