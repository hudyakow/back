
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
  $('.news__popup').fadeOut();
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
  $('.bruk').show(); 
  $('.read-more5').hide(); 
});

$('.read-more4').click(function() {
  $('.card__text3').show();   
  $('.bruk').hide(); 
  $('.read-more5').show(); 
});

$('#gallery__one').click(function() {
  $('#gallery div:nth-child(2)').css({
    'background-image':'url(image/dj.png)',
});
$('.sec6').css({
  'background':'url(image/dj-blur.png)',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('#gallery__two').click(function() {
  $('#gallery div:nth-child(2)').css({
    'background-image':'url(image/boots.png)',
});
$('.sec6').css({
  'background':'url(image/boots-blur2.png)',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('#gallery__three').click(function() {
  $('#gallery div:nth-child(2)').css({
    'background-image':'url(image/word.png)',
});
$('.sec6').css({
  'background':'url(image/word-blur.png)',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('#gallery__four').click(function() {
  $('#gallery div:nth-child(2)').css({
    'background-image':'url(image/clock.png)',
});
$('.sec6').css({
  'background':'url(image/clock-blur.png)',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('#gallery__five').click(function() {
  $('#gallery div:nth-child(2)').css({
    'background-image':'url(image/beast.png)',
});
$('.sec6').css({
  'background':'url(image/beast-blur.png)',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('.card__adaptive:first-child').click(function() {
$('.popup').css({
  'display':'block',
  'background-image':'url(image/dj.png)',
  'background-size':'cover',
  'background-position':'center',
  'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(2)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/burger.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(3)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/beast.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(4)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/clock.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(5)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/girl.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(6)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/card1.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(7)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/card2.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(8)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/card3.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.card__adaptive:nth-child(9)').click(function() {
  $('.popup').css({
    'display':'block',
    'background-image':'url(image/boks.png)',
    'background-size':'cover',
    'background-position':'center',
    'background-repeat':'no-repeat'
});
});

$('.popup').click(function() {
  $('.popup').fadeOut();
});

/*$('.news__popup').click(function() {
  $('.news__popup').fadeOut();
});*/

$('.news').click(function() {
  $('.news__popup').fadeIn();
});
(function () {
  var square = document.querySelector('.block-line');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.square0');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('square-animation');
        return;
      }

      entrySquare.classList.remove('square-animation');
    });
  });

  observer.observe(square);
})();