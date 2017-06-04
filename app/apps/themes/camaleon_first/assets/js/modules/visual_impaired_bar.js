app.modules.visualImpairedBar = (function(self) {

  var
    MINFONTSIZE = 10,
    MAXFONTSIZE = 24,
    
    $body = $('.js-dk-body'),
    $headers = $('.js-header'),
    $images = $('.js-image'),
    $skinOne = $('.js-skin-one'),
    $skinTwo = $('.js-skin-two'),
    $skinThree = $('.js-skin-three'),
    $turnUpBar = $('.js-dkvi-turn-up'),
    $clearSettings = $('.js-dkvi-reset'),
    $colorsItems = $('.js-dkvi-more-color'),
    $fontSizeChanger = $('.js-dkvi-font-size'),

    defOptions = {
      fontSize: $body.css('font-size'),
      skinTemplate: 'dk-color-skin'
    },
    cookie = {
      expires: 10000,
      path: '/',
      names: {
        vibFontSizes: 'vibFontSizes',
        vibImages: 'vibImages',
        vibHeaders: 'vibHeaders',
        vibColorsOne: 'vibColorsOne',
        vibColorsTwo: 'vibColorsTwo',
        vibColorsThree: 'vibColorsThree'
      }
    };

  function _init() {
    if ($.cookie(cookie.names.vibFontSizes) != 'default') {
      $body.css({fontSize: $.cookie(cookie.names.vibFontSizes)});
    }
    if ($.cookie(cookie.names.vibImages) == 'hidden') {
      $images.hide();
    }
    if ($.cookie(cookie.names.vibHeaders) == 'hidden') {
      $headers.addClass('dk-header-off');
    }
    if ($.cookie(cookie.names.vibColorsOne) == 'visible') {
      $body.addClass('dk-color-skinOne');
      $skinOne.addClass('dkvi-color-visible');
    }
    if ($.cookie(cookie.names.vibColorsTwo) == 'visible') {
      $body.addClass('dk-color-skinTwo');
      $skinTwo.addClass('dkvi-color-visible');
    }
    if ($.cookie(cookie.names.vibColorsThree) == 'visible') {
      $body.addClass('dk-color-skinThree');
      $skinThree.addClass('dkvi-color-visible');
    }
    _changeState();
  }
  
  function _actionFontSize($element) {
    var
      size = parseFloat($body.css('font-size')),
      defSize = parseFloat(defOptions.fontSize);

    if($element.hasClass('js-dkvi-zoom-font-size')){
      ++size;
    }
    if($element.hasClass('js-dkvi-drop-font-size')){
      --size;
    }
    if($element.hasClass('js-dkvi-def-font')){
      size = defSize;
    }
    if(size >= MINFONTSIZE && size <= MAXFONTSIZE) {
      var
        sizeString = size + 'px';

      if(size == defSize) {
        sizeString = 'default';
      }

      $fontSizeChanger.removeClass('dkvi-disable');

      if(size == MINFONTSIZE || size == MAXFONTSIZE){
        $element.addClass('dkvi-disable');
      } else {
        $element.removeClass('dkvi-disable');
      }

      $body.css({fontSize: size});
      $.cookie(cookie.names.vibFontSizes, sizeString, cookie);
    }
  }

  function _actionImages() {
    if ($images.is(':visible')) {
      $images.hide();
      $.cookie(cookie.names.vibImages, 'hidden', cookie);
    } else {
      $images.show();
      $.cookie(cookie.names.vibImages, 'default', cookie);
    }
  }

  function _actionHeaders() {
    $headers.toggleClass('dk-header-off');

    if($headers.hasClass('dk-header-off')) {
      $.cookie(cookie.names.vibHeaders, 'hidden', cookie);
    } else {
      $.cookie(cookie.names.vibHeaders, 'default', cookie);
    }
  }

  function _actionColors($this) {
    var
      thisData = $this.data('item');

    $colorsItems.each(function() {
      var
        $item = $(this),
        dataItem = $item.data('item');

      if(thisData == dataItem) {
        $body.toggleClass(defOptions.skinTemplate + thisData);
        $this.toggleClass('dkvi-color-visible');
        if($this.hasClass('dkvi-color-visible')) {
          $.cookie('vibColors' + thisData, 'visible', cookie);
        } else {
          $.cookie('vibColors' + thisData, 'default', cookie);
        }
      } else {
        if($item.hasClass('dkvi-color-visible')) {
          $body.removeClass(defOptions.skinTemplate + dataItem);
          $item.removeClass('dkvi-color-visible');
        }
        $.cookie('vibColors' + dataItem, 'default', cookie);
      }
    });
  }

  function _changeState() {
    if (_cookieState()) {
      $turnUpBar.addClass('dkvi-turn-up');
      $clearSettings.removeClass('dkvi-disable');
    } else {
      $turnUpBar.removeClass('dkvi-turn-up');
      $clearSettings.addClass('dkvi-disable');
    }
  }

  function _cookieState() {
    var stateValue;

    $.each($.cookie(), function(item, val) {
      if(item == cookie.names[item] && val != 'default') {
        return stateValue = true;
      }
    });
    return stateValue;
  }

  function _clearCookie() {
    $.each($.cookie(), function(item) {
      if(item == cookie.names[item]) {
        $.cookie(item, 'default');
      }
    });
  }

  function _resetSettings() {
    $body.css('font-size', defOptions.fontSize).removeClass('dk-color-skinOne dk-color-skinTwo dk-color-skinThree');
    $images.show();
    $headers.removeClass('dk-header-off');
    $turnUpBar.removeClass('dkvi-turn-up');
    $clearSettings.addClass('dkvi-disable');
    $fontSizeChanger.removeClass('dkvi-disable');
    $colorsItems.removeClass('dkvi-color-visible');
  }
  
  function _listener() {
    $doc.on('click', '.js-main-header', function(event) {
      var
        $target = $(event.target);

      if($target.hasClass('js-dkvi-font-size')) {
        _actionFontSize($target);
        _changeState();
      }
      if($target.hasClass('js-dkvi-more-headers')) {
        _actionHeaders();
        _changeState();
      }
      if($target.hasClass('js-dkvi-more-img')) {
        _actionImages();
        _changeState();
      }
      if($target.hasClass('js-dkvi-more-color')) {
        _actionColors($target);
        _changeState();
      }
      if($target.hasClass('js-dkvi-reset')) {
        _resetSettings();
        _clearCookie();
      }
      if($target.hasClass('js-dkvi-more-colors')) {
        $target.parent().addClass('dkvi-colors');
      }
      if($target.hasClass('js-dkvi-more-sub-close')) {
        $('.js-dkvi-more-colors').parent().removeClass('dkvi-colors');
      }
      if($target.hasClass('js-dkvi-settings')) {
        $target.toggleClass('dkvi-active');
        $('.js-dkvi-more').toggle();
      }
      if($target.hasClass('js-dkvi-toggle')) {
        $body.toggleClass('dk-visual-impaired-visible');
      }
    });
  }

  self.load = function() {
    _init();
    _listener();
  };

  return self;

})(app.modules.visualImpairedBar || {});