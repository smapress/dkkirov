app.modules.homeResp = (function(self) {

  function _init() {
    _responseSettings();
  }

  function _responseSettings() {
    var
      $win = $(window),
      $newsWrap =  $('.js-dk-news-line'),
      $newsItem = $newsWrap.find($('.js-dk-news-line-item[data-num=2]')),
      $eventsWrap = $('.js-dk-events-line'),
      eventsHeight = $eventsWrap.outerHeight(),
      newsHeight = $newsWrap.outerHeight(),
      winWidth= $win.width();

    if (winWidth > 991 && winWidth < 1200) {
      $newsItem.remove();
    }
    if (winWidth > 1200 && $('.js-dk-body').hasClass('dk-body-vi-action')) {
      $newsWrap.css('height', 'auto');
      $eventsWrap.css('height', newsHeight + 'px');
    }
    else {
      $newsWrap.css('height', eventsHeight + 'px');
    }
  }

  function _listener() {
    $doc.on('responseSettings', function () {
      _responseSettings();
    });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.homeResp || {});