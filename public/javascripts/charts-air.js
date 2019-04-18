//Code to plot gauge for air
// Enter a speed between 0 and 180
Chart.defaults.global.defaultFontSize = 18;

// var ctx = document.getElementById("air_weekly").getContext('2d');
new Chart(document.getElementById("air_weekly"), {
  type: 'line',
  data: {
    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [{
      fill: false,
      label: 'Air Pollution Reading',
      data: [300, 350, 310, 330, 280, 250, 240],
      backgroundColor: "black",
      borderColor: "black",
      lineTension: 0.2
    }]
  },
  options: {
    legend: { display: false },
    fill: false,
    title: {
      display: true,
      text: 'Air pollution on weekly basis'
    }
  }
});

new Chart(document.getElementById("air_monthly"), {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Air Pollution Reading",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#8e5ea2","#3cba9f"],
        data: [290, 270, 285, 280, 210, 240, 260, 265, 280, 300, 330, 300]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Air pollution on monthly basis'
    }
  }
});

new Chart(document.getElementById("air_yearly"), {
  type: 'bar',
  data: {
    labels: ["2015-16", "2016-17", "2017-18", "2018-19"],
    datasets: [{
      fill: false,
      label: 'Air Pollution Reading',
      data: [300, 330, 350, 320, 280],
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],

    }]
  },
  options: {
    legend: { display: false },
    fill: false,
    title: {
      display: true,
      text: 'Air pollution on yearly basis'
    }
  }
});

var yLabels = {
  1: 'LOW',
  2: 'NORMAL',
  3: 'HIGH'
}

// var ctx2 = document.getElementById('air_monthly').getContext('2d');
// var myChart2 = new Chart(ctx2, {
//   type: 'bar',
//   data: {
//     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//     datasets: [{
//       label: 'Week 1',
//       data: [1, 3, 2, 1, 2, 1, 2],
//       backgroundColor: "rgba(153,255,51,0.6)"
//     }, {
//       label: 'Week 2',
//       data: [1, 2, 1, 1, 2, 1, 3],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true,
//           callback: function (value, index, values) {
//             return yLabels[value];
//           }
//         }  
//       }]
//     }
//   }
// });


new Chart(document.getElementById("sound_daily"), {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Week 1',
      data: [1, 3, 2, 1, 2, 1, 2],
      backgroundColor: "rgba(153,255,51,0.6)"
    }, {
      label: 'Week 2',
      data: [1, 2, 1, 1, 2, 1, 3],
      backgroundColor: "rgba(255,153,0,0.6)"
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return yLabels[value];
          }
        }  
      }]
    }
  }
});