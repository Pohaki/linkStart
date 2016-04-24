$(document).ready(function(){

  $("#Start").on("click",function(){
    document.querySelector('.c').emit('start');
    document.querySelector('.c1').emit('start');
    console.log("je suis cliqué")
  })
});
