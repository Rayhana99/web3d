$(function(){
 'use strict';
 //adjust slider height
var winH=$(window).height(),
   // upperH =$('.upper-bar').innerHeight(),
    navH =$('.navbar').innerHeight();
    
$('.cover, .carousel-item').height(winH - navH);

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


});