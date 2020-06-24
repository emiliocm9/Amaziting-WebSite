$(document).ready(function() {
  var elementToAnimate = $('.header h1');
  animateScrollingLetters(elementToAnimate);
});



function animateScrollingLetters(element) {
  wrapCharacters(element);
  animateSpanScrolling(element);
}



function wrapCharacters(element) {
  $(element).contents().each(function() {
      if(this.nodeType === 1) {
          wrapCharacters(this);
      }
      else if(this.nodeType === 3) {
          $(this).replaceWith($.map(this.nodeValue.split(''), function(c) {
              if (c != ' ') {
                  return '<span>' + c + '</span>';
              }
              else {
                  return ' ';
              }
          }).join(''));
      }
  });
}


function animateSpanScrolling(element) {

  var currentDistance = 0;
  var distanceToEndAnimation = element.parent().height();


  var rotate = [0,0];

  
  var scale = [1,1];

  
  var opacity = [1,1];

  
  var translate = [[0,0,0],[0,0,0]];


 
  var minRotate = -90;
  var maxRotate = 90;
  var ratioRotate = (maxRotate - minRotate) / distanceToEndAnimation;

  var minScale = 0;
  var maxScale = 1;
  var ratioScale = (maxScale - minScale) / distanceToEndAnimation;

  var minOpacity = 0;
  var maxOpacity = 1;
  var ratioOpacity = (maxOpacity - minOpacity) / distanceToEndAnimation;


  var minTranslateX = -300;
  var maxTranslateX = 300;
  var ratioTranslateX = (maxTranslateX - minTranslateX) / distanceToEndAnimation;

  var minTranslateY = -200;
  var maxTranslateY =  0;
  var ratioTranslateY = (maxTranslateY - minTranslateY) / distanceToEndAnimation;


 
  var letter = new Array();
  element.children('span').each(function(i) {
      letter[i] = new Array();

      letter[i][0] = new Array();

      letter[i][0][0] = generateRandomNumber(minRotate,maxRotate,0);
      ratioRotate = (rotate[0] - letter[i][0][0]) / distanceToEndAnimation;

      letter[i][0][1] = generateRandomNumber(minScale,maxScale,2);
      ratioScale = (scale[0] - letter[i][0][1]) / distanceToEndAnimation;

      letter[i][0][2] = generateRandomNumber(minOpacity,maxOpacity,2);
      ratioOpacity = (opacity[0] - letter[i][0][2]) / distanceToEndAnimation;

      letter[i][0][3] = generateRandomNumber(minTranslateX,maxTranslateX,0);
      ratioTranslateX = (translate[0][0] - letter[i][0][3]) / distanceToEndAnimation;

      letter[i][0][4] = generateRandomNumber(minTranslateY,maxTranslateY,0);
      ratioTranslateY = (translate[0][1] - letter[i][0][4]) / distanceToEndAnimation;

      
      var ratioLetterRotate = ratioRotate;
      if (letter[i][0][0] < rotate[0]) {
          ratioLetterRotate = ratioRotate * -1;
      }
      var ratioLetterScale = ratioScale;
      if (letter[i][0][1] > scale[0]) {
          ratioLetterScale = ratioScale * -1;
      }
      var ratioLetterOpacity = ratioOpacity;
      if (letter[i][0][2] > opacity[0]) {
          ratioLetterOpacity = ratioOpacity * -1;
      }
      var ratioLetterTranslateX = ratioTranslateX;
      var ratioLetterTranslateY = ratioTranslateY;



      letter[i][1] = new Array();
      letter[i][1][0] = ratioLetterRotate;
      letter[i][1][1] = ratioLetterScale;
      letter[i][1][2] = ratioLetterOpacity;
      letter[i][1][3] = ratioLetterTranslateX;
      letter[i][1][4] = ratioLetterTranslateY;
  });



  $(document).on('scroll', function() {
      currentDistance = $(document).scrollTop();
      if (currentDistance < distanceToEndAnimation) {

          element.find('span').each(function(i) {

              var cssRotate = currentDistance * letter[i][1][0];
              var cssOpacity = opacity[0] * (opacity[0] - currentDistance * letter[i][1][2]);
              var cssTranslate = 'translate3d('+ currentDistance * letter[i][1][3] +'px,'+ currentDistance * letter[i][1][4] +'px, 0)';
              var cssRotate = 'rotate(' + cssRotate + 'deg)';
              var cssScale = 'scale('+ scale[0] * (scale[0] - currentDistance * letter[i][1][1]) +','+ scale[0] * (scale[0] - currentDistance * letter[i][1][1]) +')';
              var cssTransform = cssTranslate + ' ' + cssRotate + ' ' + cssScale;
              $(this).css({
                  'transform':cssTransform,
                  '-webkit-transform':cssTransform,
                  '-moz-transform':cssTransform,
                  'opacity': cssOpacity
              });
          });
      }

  });
}



function generateRandomNumber(min, max, dec) {
  var difference = max-min;
  //this code generates a random number between max and min
  var randomNumber = (difference*Math.random()) + min;
  var result = Math.round(randomNumber*Math.pow(10,dec))/Math.pow(10,dec);
  return result;
}

/*--------------------------------------------------- Timeline Elements --------------------------*/
$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
  
  });

 /*...............................................  Title Swap ....................................*/
 jQuery(document).ready(function(){
	jQuery(".titleWrapper").addClass("ready");
	
jQuery(".titleWrapper h1").each(function(){
	var fullString;
	var characters = jQuery(this).text().split("");
	
	$this = jQuery(this);
	$this.empty();
	$.each(characters, function (i, el) {
		if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
	});
		
});
	
});