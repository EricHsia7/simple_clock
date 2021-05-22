setInterval(function(){
  var today=new Date()
var h=checkTime(today.getHours());
var m=checkTime(today.getMinutes());
var s=checkTime(today.getSeconds());
$('.clocktext').html(h + ':' + m + ':' + s);
  
  if(today.getHours() > 18) {
    $('.clock').attr('dark','1')
  }
  if(today.getHours() < 18) {
    $('.clock').attr('dark','0')
  }
}, 100);

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}