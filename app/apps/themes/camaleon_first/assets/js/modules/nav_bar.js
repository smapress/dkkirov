app.modules.navBar = (function(self) {

  function _listener() {
    $doc
      .on('click', '.js-search-toggle', function() {
        $('.js-dk-body').toggleClass('dk-search-visible dk-light-overlay');
      })
      .on('mouseenter mouseleave', '.js-ddnl-item', function() {
        $('.js-dk-body').toggleClass('dk-nav-action dk-light-overlay');
      });
  }

  self.load = function() {
    _listener();
  };

  return self;

})(app.modules.navBar || {});