(function($) {
  'use strict';

  $(document).ready(function() {

    function blueasyTabs() {
      var wrapper = $('.js-tab-wrapper'),
        menu = wrapper.find('.js-tab-menu li'),
        content = wrapper.find('.js-tab-content');
      content.each(function(i) {
        if (i !== 0) {
          $(this).hide();
        }
        $(this).attr('data-tab', 'tab-' + i);
      });
      menu.each(function(i) {
        $(this).attr('data-tab', 'tab-' + i);
      });

      menu.click(function() {
        var getWrapper = $(this).closest(wrapper),
          dataTab = $(this).attr('data-tab'),
          curDataTab = getWrapper.find(menu).find('.active').parent().attr('data-tab');
        getWrapper.find(menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');

        getWrapper.find(content).filter('[data-tab=' + curDataTab + ']').slideUp(500, function() {
          getWrapper.find(content).filter('[data-tab=' + dataTab + ']').slideDown(500);
        });
      });
    }
    blueasyTabs();

    function blueasyMenu() {
    	var trigger = $('.js-nav-trigger'),
    	menu = $('.js-nav-menu');

    	trigger.click(function() {
    		$(this).next(menu).slideToggle(400);
    	});

    	$(window).resize(function() {
    		if($(window).width() > 992) {
    			menu.removeAttr('style');
    		}
    	});
    }
    blueasyMenu();

  }); //end ready

}(jQuery));
