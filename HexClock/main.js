
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
  h = (h < 10 ? "0" : "") + h
  
  h = (h == 0) ? 24 : h
  m = (m < 10 ? "0" : "") + m
  s = (s < 10 ? "0" : "") + s
  var hexTime = ("#" + h + m + s)
  $("#clock").html(hexTime)
  $("body").css("background-color", hexTime)
}, 1000)