
function repeat(cb, timeframe){
  setTimeout(function(){
    cb()
    repeat(cb, timeframe)
  }, timeframe)
}

repeat(function(){
  var time = new Date() 
  var h = time.getHours()
  var m = time.getMinutes()
  var s = time.getSeconds()
  var ampm = (h < 12) ? "AM" : "PM"
  h = (h > 12) ? h - 12 : h
  h = (h == 0) ? 12 : h
  m = (m < 10 ? "0" : "") + m
  s = (s < 10 ? "0" : "") + s
  $("#clock").html(h + ":" + m + ":" + s + ampm)
}, 1000)