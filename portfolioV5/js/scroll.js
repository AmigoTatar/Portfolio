$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
       $('#scrl,#scrl2').css({
            'display': 'none'
        });
    }
    if ($(this).scrollTop() < 150) {
        $('#scrl,#scrl2').css({
            'display': 'block'
        });
    }
});

