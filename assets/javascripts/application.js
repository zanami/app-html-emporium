
/*
Include your files here
 */

(function() {
  $.stellar();


  /*
  	Owl.Defaults = {
  		items: 3,
  		loop: false,
  		center: false,
  
  		mouseDrag: true,
  		touchDrag: true,
  		pullDrag: true,
  		freeDrag: false,
  
  		margin: 0,
  		stagePadding: 0,
  
  		merge: false,
  		mergeFit: true,
  		autoWidth: false,
  
  		startPosition: 0,
  		rtl: false,
  
  		smartSpeed: 250,
  		fluidSpeed: false,
  		dragEndSpeed: false,
  
  		responsive: {},
  		responsiveRefreshRate: 200,
  		responsiveBaseElement: window,
  		responsiveClass: false,
  
  		fallbackEasing: 'swing',
  
  		info: false,
  
  		nestedItemSelector: false,
  		itemElement: 'div',
  		stageElement: 'div',
  
  		// Classes and Names
  		themeClass: 'owl-theme',
  		baseClass: 'owl-carousel',
  		itemClass: 'owl-item',
  		centerClass: 'center',
  		activeClass: 'active'
  	};
  
  	Navigation.Defaults = {
  		nav: false,
  		navRewind: true,
  		navText: [ 'prev', 'next' ],
  		navSpeed: false,
  		navElement: 'div',
  		navContainer: false,
  		navContainerClass: 'owl-nav',
  		navClass: [ 'owl-prev', 'owl-next' ],
  		slideBy: 1,
  		dotClass: 'owl-dot',
  		dotsClass: 'owl-dots',
  		dots: true,
  		dotsEach: false,
  		dotData: false,
  		dotsSpeed: false,
  		dotsContainer: false,
  		controlsClass: 'owl-controls'
  	}
   */

  $("#quote-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 300,
    fluidSpeed: true
  });

  $(function() {
    $('#modal-1').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    $('.modal-inner').on('click', function(e) {
      e.stopPropagation();
    });
  });

  $(document).ready(function() {
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });

  $(document).ready(function() {
    var expanderContent, expanderTrigger;
    expanderTrigger = document.getElementById('js-expander-trigger');
    expanderContent = document.getElementById('js-expander-content');
    $('#js-expander-trigger').click(function() {
      $(this).toggleClass('expander-hidden');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7QUFBQTtFQU1BLENBQUMsQ0FBQyxPQUFGLENBQUE7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0VBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsV0FBbkIsQ0FBK0I7SUFDMUIsS0FBQSxFQUFPLENBRG1CO0lBRTFCLElBQUEsRUFBTSxJQUZvQjtJQUcxQixRQUFBLEVBQVUsSUFIZ0I7SUFJMUIsR0FBQSxFQUFLLEtBSnFCO0lBSzFCLElBQUEsRUFBTSxJQUxvQjtJQU0xQixlQUFBLEVBQWlCLElBTlM7SUFPMUIsa0JBQUEsRUFBb0IsSUFQTTtJQVExQixVQUFBLEVBQVksR0FSYztJQVMxQixVQUFBLEVBQVksSUFUYztHQUEvQjs7RUFjQSxDQUFBLENBQUUsU0FBQTtJQUNBLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLFNBQUE7TUFDekIsSUFBRyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsRUFBUixDQUFXLFVBQVgsQ0FBSDtRQUNFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLFlBQW5CLEVBREY7T0FBQSxNQUFBO1FBR0UsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFdBQVYsQ0FBc0IsWUFBdEIsRUFIRjs7SUFEeUIsQ0FBM0I7SUFNQSxDQUFBLENBQUUsa0NBQUYsQ0FBcUMsQ0FBQyxFQUF0QyxDQUF5QyxPQUF6QyxFQUFrRCxTQUFBO01BQ2hELENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLElBQTFCLENBQStCLFNBQS9CLEVBQTBDLEtBQTFDLENBQWdELENBQUMsTUFBakQsQ0FBQTtJQURnRCxDQUFsRDtJQUdBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsU0FBQyxDQUFEO01BQzVCLENBQUMsQ0FBQyxlQUFGLENBQUE7SUFENEIsQ0FBOUI7RUFWQSxDQUFGOztFQWVBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUE7SUFDaEIsQ0FBQSxDQUFFLHVFQUFGLENBQTBFLENBQUMsRUFBM0UsQ0FBOEUsa0JBQTlFLEVBQWtHLFNBQUMsQ0FBRDtNQUNoRyxDQUFBLENBQUUsbURBQUYsQ0FBc0QsQ0FBQyxXQUF2RCxDQUFtRSxZQUFuRTtNQUNBLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFGZ0csQ0FBbEc7RUFEZ0IsQ0FBbEI7O0VBT0EsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQTtBQUNoQixRQUFBO0lBQUEsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEI7SUFDbEIsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEI7SUFDbEIsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsS0FBMUIsQ0FBZ0MsU0FBQTtNQUM5QixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsV0FBUixDQUFvQixpQkFBcEI7SUFEOEIsQ0FBaEM7RUFIZ0IsQ0FBbEI7QUFqSEEiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbkluY2x1ZGUgeW91ciBmaWxlcyBoZXJlXG4jIyNcblxuIz0gcmVxdWlyZSBmaWxlbmFtZS5jb2ZmZWVcblxuJC5zdGVsbGFyKCk7XG5cblxuIyMjXG5cdE93bC5EZWZhdWx0cyA9IHtcblx0XHRpdGVtczogMyxcblx0XHRsb29wOiBmYWxzZSxcblx0XHRjZW50ZXI6IGZhbHNlLFxuXG5cdFx0bW91c2VEcmFnOiB0cnVlLFxuXHRcdHRvdWNoRHJhZzogdHJ1ZSxcblx0XHRwdWxsRHJhZzogdHJ1ZSxcblx0XHRmcmVlRHJhZzogZmFsc2UsXG5cblx0XHRtYXJnaW46IDAsXG5cdFx0c3RhZ2VQYWRkaW5nOiAwLFxuXG5cdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdG1lcmdlRml0OiB0cnVlLFxuXHRcdGF1dG9XaWR0aDogZmFsc2UsXG5cblx0XHRzdGFydFBvc2l0aW9uOiAwLFxuXHRcdHJ0bDogZmFsc2UsXG5cblx0XHRzbWFydFNwZWVkOiAyNTAsXG5cdFx0Zmx1aWRTcGVlZDogZmFsc2UsXG5cdFx0ZHJhZ0VuZFNwZWVkOiBmYWxzZSxcblxuXHRcdHJlc3BvbnNpdmU6IHt9LFxuXHRcdHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuXHRcdHJlc3BvbnNpdmVCYXNlRWxlbWVudDogd2luZG93LFxuXHRcdHJlc3BvbnNpdmVDbGFzczogZmFsc2UsXG5cblx0XHRmYWxsYmFja0Vhc2luZzogJ3N3aW5nJyxcblxuXHRcdGluZm86IGZhbHNlLFxuXG5cdFx0bmVzdGVkSXRlbVNlbGVjdG9yOiBmYWxzZSxcblx0XHRpdGVtRWxlbWVudDogJ2RpdicsXG5cdFx0c3RhZ2VFbGVtZW50OiAnZGl2JyxcblxuXHRcdC8vIENsYXNzZXMgYW5kIE5hbWVzXG5cdFx0dGhlbWVDbGFzczogJ293bC10aGVtZScsXG5cdFx0YmFzZUNsYXNzOiAnb3dsLWNhcm91c2VsJyxcblx0XHRpdGVtQ2xhc3M6ICdvd2wtaXRlbScsXG5cdFx0Y2VudGVyQ2xhc3M6ICdjZW50ZXInLFxuXHRcdGFjdGl2ZUNsYXNzOiAnYWN0aXZlJ1xuXHR9O1xuXG5cdE5hdmlnYXRpb24uRGVmYXVsdHMgPSB7XG5cdFx0bmF2OiBmYWxzZSxcblx0XHRuYXZSZXdpbmQ6IHRydWUsXG5cdFx0bmF2VGV4dDogWyAncHJldicsICduZXh0JyBdLFxuXHRcdG5hdlNwZWVkOiBmYWxzZSxcblx0XHRuYXZFbGVtZW50OiAnZGl2Jyxcblx0XHRuYXZDb250YWluZXI6IGZhbHNlLFxuXHRcdG5hdkNvbnRhaW5lckNsYXNzOiAnb3dsLW5hdicsXG5cdFx0bmF2Q2xhc3M6IFsgJ293bC1wcmV2JywgJ293bC1uZXh0JyBdLFxuXHRcdHNsaWRlQnk6IDEsXG5cdFx0ZG90Q2xhc3M6ICdvd2wtZG90Jyxcblx0XHRkb3RzQ2xhc3M6ICdvd2wtZG90cycsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRkb3RzRWFjaDogZmFsc2UsXG5cdFx0ZG90RGF0YTogZmFsc2UsXG5cdFx0ZG90c1NwZWVkOiBmYWxzZSxcblx0XHRkb3RzQ29udGFpbmVyOiBmYWxzZSxcblx0XHRjb250cm9sc0NsYXNzOiAnb3dsLWNvbnRyb2xzJ1xuXHR9XG5cbiMjI1xuXG4kKFwiI3F1b3RlLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgIGl0ZW1zOiAxLFxuICAgICBsb29wOiB0cnVlLFxuICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgbmF2OiBmYWxzZSxcbiAgICAgZG90czogdHJ1ZSxcbiAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxuICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgIHNtYXJ0U3BlZWQ6IDMwMCxcbiAgICAgZmx1aWRTcGVlZDogdHJ1ZSxcbiAgICAgXG4gICAgIH0pO1xuXG4jIG1vZGFsc1xuJCAtPlxuICAkKCcjbW9kYWwtMScpLm9uICdjaGFuZ2UnLCAtPlxuICAgIGlmICQodGhpcykuaXMoJzpjaGVja2VkJylcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyAnbW9kYWwtb3BlbidcbiAgICBlbHNlXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MgJ21vZGFsLW9wZW4nXG4gICAgcmV0dXJuXG4gICQoJy5tb2RhbC1mYWRlLXNjcmVlbiwgLm1vZGFsLWNsb3NlJykub24gJ2NsaWNrJywgLT5cbiAgICAkKCcubW9kYWwtc3RhdGU6Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuY2hhbmdlKClcbiAgICByZXR1cm5cbiAgJCgnLm1vZGFsLWlubmVyJykub24gJ2NsaWNrJywgKGUpIC0+XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHJldHVyblxuICByZXR1cm5cbiAgXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICAkKCcuc2xpZGluZy1wYW5lbC1idXR0b24sLnNsaWRpbmctcGFuZWwtZmFkZS1zY3JlZW4sLnNsaWRpbmctcGFuZWwtY2xvc2UnKS5vbiAnY2xpY2sgdG91Y2hzdGFydCcsIChlKSAtPlxuICAgICQoJy5zbGlkaW5nLXBhbmVsLWNvbnRlbnQsLnNsaWRpbmctcGFuZWwtZmFkZS1zY3JlZW4nKS50b2dnbGVDbGFzcyAnaXMtdmlzaWJsZSdcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm5cbiAgcmV0dXJuXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIGV4cGFuZGVyVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1leHBhbmRlci10cmlnZ2VyJylcbiAgZXhwYW5kZXJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWV4cGFuZGVyLWNvbnRlbnQnKVxuICAkKCcjanMtZXhwYW5kZXItdHJpZ2dlcicpLmNsaWNrIC0+XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyAnZXhwYW5kZXItaGlkZGVuJ1xuICAgIHJldHVyblxuICByZXR1cm5cbiJdfQ==