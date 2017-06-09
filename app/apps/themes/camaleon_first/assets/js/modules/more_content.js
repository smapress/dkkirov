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
        heightItem = $item.data('height') || parseInt(($item).css('max-height')),
        showTitle = $item.data('showtitle'),
        hideTitle = $item.data('hidetitle');

      if (thumb && $.cookie('vibImages') != 'hidden') {
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

  function _listener() {
    $doc
      .on('moreContent', function() {
        $('.js-more-content').css('height', 'auto');
        _moreContent();
      });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.moreContent || {});
