function cssLoad() {
    $('.main select').prop('selectedIndex', 0);
    $('.main__product_price button').each(function (i, e) {
        var prodInfo = $('.main__product_info').eq(i)
        $(this).appendTo(prodInfo);
    });
    $('.header__right_block img').insertAfter($('.header__left_block p'))
}

var calc_button = $('.main__calc_button button'),
    cacl_result = $('.main__calc_result');

calc_button.click(function () {
    if (window.innerWidth < 767) {
        cacl_result.css('display', 'block').hide().fadeIn();
        $('.main__result_total span').text('Yıllık Toplam Tutar:');
    }
    else
        cacl_result.css('display', 'inline-flex').hide().fadeIn();

});
window.onload = function () {
    if (window.innerWidth <= 767) {
        cssLoad();
    }
    else
        $('.main select').prop('selectedIndex', 1);
}
window.onresize = function () {
    if (window.innerWidth <= 767) {
        cssLoad();
    }
    else
        $('.main select').prop('selectedIndex', 1);
}


