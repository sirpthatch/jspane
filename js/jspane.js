(function($) {

    var step = 0;

    var delta_w = 0;
    var delta_h = 0;
    var prev_top = 0;
    var prev_left = 0;

    var initiate_move = function(ele){

        delta_h = ele.height() - ele.parent().height();
        delta_w = ele.width() - ele.parent().width();

        move_img(ele);
    }
    var move_img = function(ele){
        var top = Math.random() * delta_h;
        var left = Math.random() * delta_w;

        var delta_top = Math.round(prev_top - top);
        var delta_left = Math.round(prev_left - left);

        var newTop = delta_top < 0 ? '-='+Math.abs(delta_top) : '+='+Math.abs(delta_top);
        var newLeft = delta_left < 0 ? '-='+Math.abs(delta_left) : '+='+Math.abs(delta_left);
        ele.animate({
            top:newTop,
            left:newLeft
        }, 2000, function(){setTimeout(function(){move_img(ele);},0);});

        prev_top = top;
        prev_left = left;
    }

    var setup_img = function(ele){
        ele.width(ele.parent().width() * 1.2);
        ele.css('position','absolute');
        ele.parent().css('margin','0px');
    }


    $.fn.pane = function() {
        var ele = this;
        $(document).ready(function(){
            setup_img(ele);
            setTimeout(function(){initiate_move(ele);},50);
        });
    }
})( jQuery );