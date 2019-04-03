var socket = io();
socket.emit("works", "hopeThisWorksMan")

socket.on("success", function (data) {
  console.log(data)
})

socket.on("level", function (data) {
  console.log(data);
  if (data.level > 400) {
    alert("Alcohol level exceeded")
    $("#alcohol").append("<p>Alcohol level over limit detected. Location is Longitude:" + data.long + " Latitude: " + data.lat + "</p>")
    socket.disconnect();
  } else {
    $("#level").text(data.level)
  }
})