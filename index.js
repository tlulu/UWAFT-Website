$(document).ready(function() {
    // animate the landing text to fade in and move down slightly
    $("#landing_div_text").animate({top: "43%", opacity: 1.0}, 1000, function() {
        // when the text is done animating, animate certain words to a green color
        $("#landing_div_text span").animate({color:"#5EBA40"}, 1000, function() {
            $("#landing_image_unblur").animate({opacity:1.0}, 2000);
            $("#landing_image_blur").animate({opacity:0.0}, 4000);
            $("#landing_div_text").animate({top: "43%", opacity: 0.0}, 2000);
        });
    });
    
    // evoked whenever the user scrolls
    $(window).scroll(function() {
        var currentWindowScrollTop = $(this).scrollTop();
        var newImageScrollTop = currentWindowScrollTop / 30.0;
        $("#landing_div_text").css({top:43 - newImageScrollTop + "%"});
    });
});