var socket = io();
socket.emit("works", "hopeThisWorksMan")

socket.on("success", function (data) {
  console.log(data)
})

socket.on("air", function (data) {
  console.log(data);
  document.getElementById("date").innerHTML = data.date;
  document.getElementById("time").innerHTML = data.time;
  document.getElementById("value").innerHTML = data.value;
  document.getElementById("airH3").innerHTML = data.value;
})

socket.on("sound", function (data) {
  console.log(data);
  document.getElementById("sdate").innerHTML = data.date;
  document.getElementById("stime").innerHTML = data.time;
  document.getElementById("svalue").innerHTML = data.result;
  document.getElementById("soundH3").innerHTML = data.value;
})

var count = 0;

socket.on("air-sound", function(data){
  console.log(data);
  count++;
  console.log(count);
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = data.date;
  cell2.innerHTML = data.time;
  cell3.innerHTML = data.air;
  cell4.innerHTML = data.sound;
  if((count%10)==0){
    $('#myPager').empty()
  $('#myTable').pageMe({
    pagerSelector: '#myPager',
    activeColor: 'blue',
    prevText: 'Anterior',
    nextText: 'Siguiente',
    showPrevNext: true,
    hidePageNumbers: false,
    perPage: 10
  });
}
})