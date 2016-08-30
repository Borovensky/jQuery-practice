$(function(){
	$('#fader').caruselPlagin();
});






// $(function(){

// 	// определяем элементы с которыми будем работать
// 	var $container = $('#fader'),
// 	slideSelector = '.slide',
// 	fading = false,
// 	slideTimer,
// 	activeSlide,
// 	newSlide,
// 	$slides = $container.find(slideSelector),
// 	totalSlides = $slides.length,
// 	$pagerList = $container.find('.pager_list');

// 	//2 функция для смены слайдов
// 	function changeSlides(target){
// 		if(target == 'next'){
// 			newSlide = activeSlide + 1;
// 			if(newSlide > totalSlides - 1){
// 				newSlide = 0;
// 			}
// 		}else if(target == 'prev'){
// 			newSlide = activeSlide - 1;
// 			if(newSlide < 0){
// 				newSlide = totalSlides -1
// 			}
// 		}else{
// 			newSlide = target;
// 		}
// 		animateSlides(activeSlide, newSlide);
// 	}

// 	//1 строим page_list
// 	for(var i = 0; i < totalSlides; i++){
// 		$pagerList.append('<li class=page data-target=' + i + '>' + i + '</li>');
// 	}
// 	// такой же код, только на jQuery
// 	// for(var i = 0; i < totalSlides; i++){
// 	// 	$('<li>').clone().append(''+ i +'').addClass('page').attr('data-target', i).appendTo($pagerList);
// 	// }

// 	// создаем переменную которая ищи переменные с класом page и добавляем класс active
// 	var $pager = $pagerList.find('.page');
// 	$slides.eq(0).css('opacity', 1);
// 	$pager.eq(0).addClass('active');
// 	activeSlide = 0;

// 	//3 манипулясыя с li присваемаем класс active.
// 	$container.find('.page').on('click', function(){
// 		var target = $(this).attr('data-target');
// 		clearTimeout(slideTimer);
// 		changeSlides(target);
// 		// console.log(target);
// 	})

// 	//4 анимируем слайдер
// 	function animateSlides(activeIndex, newIndex){
// 		waitForNext();
// 		if(fading || activeIndex == newIndex){
// 			return false;
// 		}
// 		fading = true;
// 		$pager.removeClass('active').eq(newSlide).addClass('active');
// 		$slides.eq(activeIndex).css('z-index', 3);
// 		$slides.eq(newIndex).css({'z-index' : 2, 'opacity' : 1});

// 		function cleanUp(){
// 			$slides.eq(activeIndex).removeAttr('style');
// 			activeSlide = newIndex;
// 			fading = false;
// 		}

// 		$slides.eq(activeIndex).animate({'opacity' : 0}, 1000, function(){
// 																					cleanUp();
// 																				});

// 	}

// 	function waitForNext(){
// 		slideTimer = setTimeout(function(){
// 			changeSlides('next');
// 		}, 2000);
// 	}
// 	waitForNext();

// });