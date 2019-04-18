var yLabels = {
    1: 'LOW',
    2: 'NORMAL',
    3: 'HIGH'
}

new Chart(document.getElementById("sound_daily"), {
    type: 'line',
    data: {
        labels: ['00:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [{
            label: 'Sound Pollution',
            data: [1, 1, 2, 3, 3, 2, 3, 2, 4],
            backgroundColor: "rgba(153,255,51,0.6)",
            lineTension: 0.2
        }]
    },
    options: {
        legend: {
            display: false
        },
        fill: false,
        title: {
            display: true,
            text: 'Sound pollution on daily basis'
        },
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

new Chart(document.getElementById("sound_monthly"), {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Sound Pollution Reading",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#8e5ea2","#3cba9f", "white"],
          data: [2, 2, 3, 1, 3, 2, 2, 1, 2, 3, 3, 3, 4]
                }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Sound pollution on monthly basis'
      },
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