app.modules.dynamicAlign = (function(self) {

  function _init() {
    _alignSide();
  }

  function _alignSide() {
    $('.js-dynamic-ref').each(function () {
      var
        $this = $(this),
        $side = $('.js-dynamic-side'),
        $item = $('.js-dynamic-item'),
        refHeight = $this.height();

      $side.css('height', refHeight);
      $item.css('max-height', refHeight);
    });
  }

  function _listener() {
    $doc.on('dynamicAlign', function () {
      _alignSide();
    });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.dynamicAlign || {});
