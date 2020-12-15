$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		adaptiveWidth:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:800,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnHover:true,
		touchThreshodl:15,
		waitForAnimate:false, /*вертикальные слайды*/
		asNavFor:".sliderbig",
		responsive:[
		{
			breakpoint:768,
			settings:{
			slidesToShow:2,
			}
		},{
			breakpoint:480,
			settings:{
			slidesToShow:1,
			}
		}

		]

	});
	$('.sliderbig').slick({
		arrows:false,
		
		asNavFor:".slider",

	});
});
