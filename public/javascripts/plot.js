var socket = io();

socket.on("air", function (data) {
  var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.65, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    staticLabels: {
      font: "10px sans-serif", // Specifies font
      labels: [0, 100, 200, 300, 400], // Print labels at these values
      color: "#000000", // Optional: Label text color
      fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

  };
  var target = document.getElementById('airGauge'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 400; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 27; // set animation speed (32 is default value)
  gauge.set(document.getElementById("value").innerHTML); // set actual value

})

socket.on("sound", function (data) {
  var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.65, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    staticLabels: {
      font: "10px sans-serif", // Specifies font
      labels: [0, 1], // Print labels at these values
      color: "#000000", // Optional: Label text color
      fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

  };
  var target = document.getElementById('soundGauge'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 1; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 27; // set animation speed (32 is default value)
  gauge.set(data.value); // set actual value

})