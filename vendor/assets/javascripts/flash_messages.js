(function($) {
  $.fn.flashMessage = function(options) {

    options = $.extend({
      how: '',
      timer: true,
      time: 10000,
      text_message: '',
      text_action: '',
      class_wrap: '',
      class_message: '',
      class_icon: '',
      class_action: ''

    }, options);

    return $(this).each(function() {

      if( $(this).parent().find('.flash-message').get(0) )
        return;

      var
        template = $('<div />', {
          'class': 'flash-wrap ' + options.class_wrap
        }),

        message = $('<span />', {
          'class': 'flash-message ' + options.class_message,
          text: options.text_message
        }),
        
        icon = $('<i />', {
          'class': 'flash-message-icon ' + options.class_icon
        }),
        
        close = $('<span />', {
          'class': 'flash-message-action ' + options.class_action,
          text: options.text_action
        });

      $(this)[options.how](template.prepend(icon).append(message).append(close).hide().fadeIn('fast'));

      if (options.timer) {
        template.delay(options.time).fadeOut('normal', function () {
          $(this).remove();
        });
      }

    });
  };
})(jQuery);
