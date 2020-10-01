$(function(){
    $('a[href^="#"]').click(function(){
    $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 2000 ,"swing");
      return false;
    })
});


$(function() {
   $('.pull-down-list ul').hide();
   $('.menu-icon').on('click', function() {
      var $navList = $(this);
      if($navList.hasClass("current")) {
         $('.pull-down-list ul').slideUp(500,function(){
            $navList.removeClass("current");
         });
      } else {
         $('.pull-down-list ul').slideDown(500,function(){
            $navList.addClass("current");
         });
      };
      return false;
   });
});