app.modules.patternProfile = (function(self) {

  function _init() {
    _galleryPopup();
  }

  function _galleryPopup() {
    var
      imgs = [],
      $img = $('.js-dkfb-img-item');

    $img.each(function(){
      imgs.push({
        src: $(this).data('link'),
        title: ''
      });
    });

    $img.magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      items: imgs,
      closeOnContentClick: false,
      closeOnBgClick: false,
      closeBtnInside: false,
      fixedContentPos: true,
      midClick: true,
      gallery: {
        enabled: true,
        tPrev: $img.data('prev-text'),
        tNext: $img.data('next-text')
      },
      callbacks: {
        beforeOpen: function() {
          var index = $img.index(this.st.el);
          if (-1 !== index) {
            this.goTo(index);
          }
        }
      }
    });
  }

  function _listener() {
    $doc
      .on('click', '.js-gallery-state-change', function() {
        var $this = $(this);

        $this
          .toggleClass('fa-angle-down fa-angle-up')
          .parents('.js-gallery').toggleClass('dkfb-img-all');
      });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.patternProfile || {});
