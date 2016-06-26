$(document).ready(function(){
  $('#Start').on('click',function(){
    document.querySelector('#Start').emit('fade');
    var entities = [].slice.call(document.querySelectorAll(".c"));
    entities.forEach(function (el) { el.emit('start'); });
    console.log("je suis cliqué")
    var link = 'window.location.replace("http://pohaki.github.io/TheWorldVR");';
    setTimeout(function(){window.location.replace("http://kevinlachaise.fr")}, 5000);
  });
});
