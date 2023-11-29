// let card = document.getElementById("ncr-project");
// new simpleParallax(card);

$(window).scroll(function() {
    $('#ncr-project').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideUp");
        }
    });
});

$('#ncr-project').click(function() {
    $(this).addClass("slideUp");
});