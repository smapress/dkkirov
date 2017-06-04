app.modules.patternHome = (function(self) {

  function _init() {
    _responseSettings();
  }

  function _responseSettings() {
    var
      $win = $(window),
      $newsWrap =  $('.js-dk-news-line'),
      $newsItem = $newsWrap.find($('.js-dk-news-line-item[data-num=2]')),
      eventsHeight = $('.js-dk-events-line').outerHeight(),
      winWidth= $win.width();

    if (winWidth > 991 && winWidth < 1200) {
      $newsItem.remove();
      $newsWrap.css('height', eventsHeight + 'px');
    }

  }

  function _listener() {
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.patternHome || {});