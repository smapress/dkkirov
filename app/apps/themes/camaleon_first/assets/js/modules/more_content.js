app.modules.moreContent = (function(self) {

  function _init() {
    _moreContent();
  }

  function _moreContent() {
    $('.js-more-content').each(function() {
      var
        $item = $(this),
        thumb = parseInt($('.js-thumb').css('padding')),
        heightSide = $('.js-side').outerHeight(),
        heightDef = $item.outerHeight(),
        heightItem = $item.data('height'),
        showTitle = $item.data('showtitle'),
        hideTitle = $item.data('hidetitle');

      if (thumb) {
        heightItem = heightSide - thumb;
      }

      if (heightDef > heightItem) {
        $item.readmore({
          speed: 200,
          maxHeight: heightItem,
          moreLink: $('<a href="#"></a>').text(showTitle),
          lessLink: $('<a href="#"></a>').text(hideTitle)
        });
      }
    });
  }

  self.load = function() {
    _init();
  };

  return self;

})(app.modules.moreContent || {});
