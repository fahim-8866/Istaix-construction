// $(document).ready(function(){
//     $(".client_imgs").on("click", "a",function(){
//         var tabId= $(this).attr("id");
//         $(this).addClass("active").siblings().removeClass("active");
//         $("#" + tabId + "-Comment-card").addClass("active").siblings().removeClass("active");
//     });
// });

$('.client_imgs a').click(function(event){
    index= $(this).index();

    $('.client_imgs a').removeClass('active');
    $(this).addClass('active');
    $('.card_comment').hide();
    $('.card_comment').eq(index).show();
});


$(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

AOS.init();