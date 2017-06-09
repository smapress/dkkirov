app.modules.visualImpairedBar = (function(self) {

  var
    MINFONTSIZE = 11,
    MAXFONTSIZE = 21,
    
    $body = $('.js-dk-body'),
    $flash = $('.js-flash-messages'),
    $headers = $('.js-dk-content, .js-dk-footer'),
    $images = $('.js-vi-img'),
    $skinOne = $('.js-skin-one'),
    $skinTwo = $('.js-skin-two'),
    $skinThree = $('.js-skin-three'),
    $turnUpBar = $('.js-dkvi-turn-up'),
    $clearSettings = $('.js-dkvi-reset'),
    $colorsItems = $('.js-dkvi-more-color'),
    $fontSizeChanger = $('.js-dkvi-font-size'),

    defOptions = {
      fontSize: $body.css('font-size'),
      skinTemplate: 'dk-color-skin-'
    },
    cookie = {
      expires: 10000,
      path: '/',
      names: {
        vibFontSizes: 'vibFontSizes',
        vibImages: 'vibImages',
        vibHeaders: 'vibHeaders',
        vibColors_one: 'vibColors_one',
        vibColors_two: 'vibColors_two',
        vibColors_three: 'vibColors_three',
        vibFlashOff: 'vibFlashOff'
      }
    };

  function _init() {

    if (_cookieState() && $.cookie(cookie.names.vibFlashOff) != 'off') {
      _flashMessage();
    }

    if ($.cookie(cookie.names.vibFontSizes) != 'default') {
      $body.css({fontSize: $.cookie(cookie.names.vibFontSizes)});
    }
    if ($.cookie(cookie.names.vibImages) == 'hidden') {
      $images.hide();
    }
    if ($.cookie(cookie.names.vibHeaders) == 'hidden') {
      $headers.addClass('dk-header-off');
    }
    if ($.cookie(cookie.names.vibColors_one) == 'visible') {
      $body.addClass('dk-color-skin-one');
      $skinOne.addClass('dkvi-color-visible');
    }
    if ($.cookie(cookie.names.vibColors_two) == 'visible') {
      $body.addClass('dk-color-skin-two');
      $skinTwo.addClass('dkvi-color-visible');
    }
    if ($.cookie(cookie.names.vibColors_three) == 'visible') {
      $body.addClass('dk-color-skin-three');
      $skinThree.addClass('dkvi-color-visible');
    }
    _changeState();
    $doc.trigger('moreContent');
    $doc.trigger('dynamicAlign');
    $doc.trigger('responseSettings');
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
          $.cookie('vibColors_' + thisData, 'visible', cookie);
        } else {
          $.cookie('vibColors_' + thisData, 'default', cookie);
        }
      } else {
        if($item.hasClass('dkvi-color-visible')) {
          $body.removeClass(defOptions.skinTemplate + dataItem);
          $item.removeClass('dkvi-color-visible');
        }
        $.cookie('vibColors_' + dataItem, 'default', cookie);
      }
    });
  }

  function _changeState() {
    if (_cookieState()) {
      $turnUpBar.addClass('dkvi-turn-up');
      $clearSettings.removeClass('dkvi-disable');
      $body.addClass('dk-body-vi-action');
    } else {
      $turnUpBar.removeClass('dkvi-turn-up');
      $clearSettings.addClass('dkvi-disable');
      $body.removeClass('dk-body-vi-action');
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

  function _flashMessage() {
    $flash.flashMessage({
      how: 'append',
      timer: false,
      text_action: 'Не показывать сообщение',
      text_message: 'У вас используется версия сайта для слабовидящих',
      class_wrap: 'dk-flash-message-wrap container',
      class_message: 'col-md-8 col-xs-10 dk-flash-message',
      class_icon: 'col-md-1 col-xs-2 dk-flash-message-icon fa fa-eye',
      class_action: 'col-md-3 col-xs-10 col-md-offset-0 col-xs-offset-2 dk-flash-close js-dk-flash-close'
    });
  }

  function _resetSettings() {
    $body.css('font-size', defOptions.fontSize).removeClass('dk-color-skin-one dk-color-skin-two dk-color-skin-three');
    $flash.hide();
    $images.show();
    $headers.removeClass('dk-header-off');
    $turnUpBar.removeClass('dkvi-turn-up');
    $clearSettings.addClass('dkvi-disable');
    $fontSizeChanger.removeClass('dkvi-disable');
    $colorsItems.removeClass('dkvi-color-visible');
    $body.removeClass('dk-body-vi-action');
  }
  
  function _listener() {
    $doc
      .on('click', '.js-main-header', function(event) {
        var
          $target = $(event.target);

        if($target.hasClass('js-dk-flash-close')) {
          $flash.hide();
          $.cookie(cookie.names.vibFlashOff, 'off', cookie);
        }

        if($target.hasClass('js-dkvi-font-size')) {
          _actionFontSize($target);
          _changeState();
          $doc.trigger('moreContent');
          $doc.trigger('dynamicAlign');
          $doc.trigger('responseSettings');
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
          $doc.trigger('moreContent');
          $doc.trigger('dynamicAlign');
          $doc.trigger('responseSettings');
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