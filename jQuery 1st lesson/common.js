// hide, show
$('#b1').on('click', function(){
	$('#id1').toggle();
});

// fadeIn, fadeOut
$('#b2').on('click', function(){
	$('#id2').fadeToggle(1000);
});

// slideUp, slideDown
$('#b3').on('click', function(){
	$('#id3').slideToggle(1000);
});












// var img;
// var imgs = $('#imgs');

// function my(img){
// 	imgs.fadeOut(3000);
// 	imgs.attr('src', img);
// 	//console.log($('#imgs').attr('src'));
// 	imgs.fadeIn(3000);
// }

// for(var i = 1; i < 4; i++){
// 	img = 'img/' + i + '.png';
// 	setTimeout(my(img),2000);

// 	// $('#imgs').fadeOut(3000);
// 	// $('#imgs').attr('src', img);
// 	// console.log($('#imgs').attr('src'));
// 	// $('#imgs').fadeIn(3000);
// }