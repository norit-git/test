var randomname = function() {
   var array = [
      "img/menu-top/menu-top01.jpg",
      "img/menu-top/menu-top02.jpg",
      "img/menu-top/menu-top03.jpg",
      "img/menu-top/menu-top04.jpg",
      "img/menu-top/menu-top05.jpg"

      // "img/menu-top/menu000-otemoto.jpg"
   ];
   var l = array.length;
   var r = Math.floor(Math.random()*l);
   var imgurl = array[r];
   $("img#random-img").attr({"src":imgurl});
};

$(document).ready(function(){
  randomname();
});
$('.random-left, .random-right').click(function() {
  location.reload();
});
