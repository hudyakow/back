
/*
$('.image').click(function() {
  let src = $(this).attr('src');
  $('.popup img').attr('src',src);
  $('.popup').fadeIn();    
});
$('.close').click(function() {
  $('.popup').fadeOut();
});
*/ 

/*$('.card__adaptive').click(function() {
  let src = $(this).attr('src');
  $('.popup img').attr('src',src);
  $('.popup').fadeIn();    
});

$('.popup').click(function() {
  $('.popup').fadeOut();
});*/

$('.close1').click(function() {
  $('#connect').fadeOut();
});

$('.start').click(function() {
  $('#connect').fadeIn();
});

$('.read-more').click(function() {
  $('.card__text').hide();   
  $('.ten').fadeIn(); 
  $('.read-more').hide(); 
});

$('.read-more1').click(function() {
  $('.card__text').show();   
  $('.ten').hide(); 
  $('.read-more').show(); 
});

$('.read-more3').click(function() {
  $('.card__text2').hide();   
  $('.cali').fadeIn(); 
  $('.read-more3').hide(); 
});

$('.read-more2').click(function() {
  $('.read-more3').show(); 
  $('.card__text2').show();   
  $('.cali').hide(); 
});

$('.read-more5').click(function() {
  $('.card__text3').hide();   
  $('.bruk').fadeIn(); 
  $('.read-more5').hide(); 
});

$('.read-more4').click(function() {
  $('.read-more5').show(); 
  $('.card__text3').show();   
  $('.bruk').hide(); 
});
/*$('.card__hidden').click(function() {
  $('.card__one').fadeIn();   
  $('.card__hidden').hide(); 
});*/


/*(function(){
  init();

  var g_containerInViewport;
  function init(){
      setStickyContainersSize();
      bindEvents();
  }

  function bindEvents(){
      window.addEventListener("wheel", wheelHandler);        
  }

  function setStickyContainersSize(){
      document.querySelectorAll('.sticky-container').forEach(function(container){
          const stikyContainerHeight = container.querySelector('main').scrollWidth;
          container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      });
  }

  function isElementInViewport (el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt){
      
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
          return isElementInViewport(container);
      })[0];

      if(!containerInViewPort){
          return;
      }

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if(g_canScrollHorizontally){
          containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
      }
  }
})();*/