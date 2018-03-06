$('.js-newspaper').each(function () {
    var $news_list = $(this).find('.js-newspaper-content');
    var $news_items = $('.js-newspaper-item');
    var $news_big_items = $('.js-newspaper-big-item');

    var modifyBlocks = function () {
        $news_items.removeClass('like-a-big');

        if (window.innerWidth < 1280 && window.innerWidth >= 768) {
            $news_big_items.each(function (i, item) {
                if ($(item).prev().length > 0 && $(item).prev().offset().left < ($news_list.width() / 2) && $(item).prev().width() <= $news_list.width() / 2) {
                    $(item).prev().addClass('like-a-big');
                }
            });
        }

    };

    new ResizeSensor($news_list, function () { // библиотека для отслеживания блоков
        modifyBlocks();
    });

    modifyBlocks();
});
