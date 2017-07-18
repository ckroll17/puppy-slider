$(function(){
    $('.slides img:first').addClass('top');
    var change = function(){
      var current = $('.slides img.top');
      var next = current.next();
      if(!next.length){
        next = $('.slides img:first')
        next.addClass('top');
        current.animate({opacity:0.0}, 1000, function(){
          current.removeClass('top');
          current.css({opacity:1.0});
        })
      }else{
        next.css({opacity:0.0})
          .addClass('top')
          .animate({opacity:1.0}, 1000,function(){
            current.removeClass('top');
        });
      }      
    }
    setInterval(change, 3500);
 }
)