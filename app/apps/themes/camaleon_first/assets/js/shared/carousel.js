app.modules.customCarousel = (function(self) {

  var $carousel = $('.js-gallery-item').parents('.js-gallery');

  function _init() {
    _createCarousel();
    _resizeCarousel()
  }

  function _createCarousel() {
    $carousel.each(function(i) {
      var
        $item = $(this).attr('id', i),
        dataAutoScroll = $item.find($('.js-gallery-item')).data('autoscroll');

      $item.jcarousel({
        scroll: 1,
        wrap: 'circular',
        easing: 'linear',
        btnNext: $('<span class="dk-gallery-next fa fa-angle-right"></span>').attr('id', i).appendTo($item),
        btnPrev: $('<span class="dk-gallery-prev fa fa-angle-left"></span>').attr('id', i).appendTo($item)
      });

      $item.find($('.dk-gallery-next')).jcarouselControl({
        target: '+=1',
        carousel: $item
      });

      $item.find($('.dk-gallery-prev')).jcarouselControl({
        target: '-=1',
        carousel: $item
      });

      if (dataAutoScroll) {
        $item.jcarouselAutoscroll({
          interval: 4500,
          target: '+=1',
          autostart: true
        });
      }
    });
  }

  function _resizeCarousel() {
    $carousel.each(function(i) {
      var
        $item = $(this).attr('id', i),
        width = $item.innerWidth(),
        dataVisibleSmall = $item.find($('.js-gallery-item')).data('visible-small'),
        dataVisiblelarge = $item.find($('.js-gallery-item')).data('visible-large');

      if (width > 600) {
          width = width / dataVisiblelarge;
      }
      if (width > 300) {
        width = width / dataVisibleSmall;
      }
      $item.jcarousel('items').css('width', width + 'px');
    });

  }

  function _listener() {
    $carousel.on('jcarousel:create jcarousel:reload', function () {
      _resizeCarousel();
    });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.customCarousel || {});