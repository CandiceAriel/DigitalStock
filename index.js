$(function(){
  var win = window;
  var doc = document;
  var docElem = doc.documentElement;
  var body = doc.getElementsByTagName('body')[0];
  var x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  var y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

  var pagePaddingLeft = $(".page__wrapper").css('padding-left');
  var pagePaddingRight = $(".page__wrapper").css('padding-right');
  var elFrameContainer = $(".frame__container")[0]
  var elSliderContainer = $(".slider__container")[0]

  document.getElementById("pgContainer").style.height = window.innerHeight + "px";

  elFrameContainer.style.height = y-860 + "px";
  //elSliderContainer.style.width = 100 - 30 + "%";
  //elSliderContainer.style.maxHeight = win.innerHeight-( 310 + 64 ) + "px";
  //elSliderContainer.style.minHeight = win.innerHeight-( 310 + 64 ) + "px";
  document.getElementById("headerContainer").style.maxWidth = 100% - pagePaddingLeft - pagePaddingRight + "px" ;
}); 

function syncHeight() {
  document.documentElement.style.setProperty(
      '--window-inner-height',
      `${window.innerHeight}px`
  );
}

window.addEventListener('resize', syncHeight);
var slideIndex = 1;
var sliderIndex = 1
showDivs(slideIndex, sliderIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  showFront(sliderIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__img");
  if (n > x.length ) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showFront(n) {
  var i;
  var y = document.getElementsByClassName("slider__img--front");
  if (n > y.length ) {sliderIndex = 1}
  if (n < 1) {sliderIndex = y.length} ;
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  y[sliderIndex-1].style.display = "block";
}

