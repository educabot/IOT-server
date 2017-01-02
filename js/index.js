$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      global: {
        useUTC: false // Coordinated Universal Time
      }
    });

    $('#container').highcharts({
      chart: {
        type: 'spline',
        zoomType: 'xy',
        animation: Highcharts.svg,
        marginRight: 10,
        events: {
          load: function() {

            // Update chart every second
            var series = this.series[0];
            setInterval(function() {
              var x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      title: {
        text: 'Live data'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Trading Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#000'
        }]
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'value',
        data: (function() {
          // Array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]
    });
  });
});