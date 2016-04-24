$(document).ready(function(){

  document.addEventListener('click',function(){
    var entities = [].slice.call(document.querySelectorAll(".c"));
    document.querySelector('#Start').emit("fade");
    entities.forEach(function (el) { el.emit('start'); });
    console.log("je suis cliqué")
  })
});
