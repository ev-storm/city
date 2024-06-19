$('#btn').click(function(){
	$( "#btnBD" ).click();
});
 $('#btnBD').hide();

//swiper
let swiperTicker = new Swiper(".ticker", {
	slidesPerView: 6,
	spaceBetween: 0,
	loop: true,	
	autoplay: {
		enabled: true,
		delay: 0,
  },
	speed: 2500,
});

var swiperWord = new Swiper(".title__slide", {
	spaceBetween: 70,
	slidesPerView: 1,
	loop: true,
	direction: "vertical",
	autoplay: {
		enabled: true,
		delay: 1000,
  },
	speed: 1000,
});


// LOGO_ANIME	



	// $(".menu").mouseenter(function(){
	// 		$('#logo__player').trigger('play'); 
	// });

	// $(".menu").mouseleave(function(){
	// 	$('#logo__player').trigger('stop'); 
	// });

	// .menu:hover{
	// 	background: #161616;
	// 	transition: all 0.3s ease-out;
	// 	box-shadow: 30px 40px 80px #000000;
	// }

	// let column_w2 = $('.about__column_2').width()/10+"vw";
	// let column_w1 = $('.about__column_1').width();

	// $('.about__column_2').css({
	// 	'width': column_w2,
	// })

	// console.log(column_w1);
	// console.log(column_w2);



// scroll menu
	$(window).scroll(function() {
		let cof = $(this).scrollTop();
		let blur = "blur("+cof/30+"px)";
		let top = 15-cof/10+"vw";


		$('.video').css({
			'filter': blur,
		});

		$('.menu__main').css({
			'padding-top': top,
		});

		$('.menu').mouseenter(function(){
			$(this).css({
				'background': '#161616',
				'box-shadow': '30px 40px 80px #000000',
			})
		});
		
		$('.menu').mouseleave(function(){
			$('.menu').css({
				'background': '#00000000',
				'box-shadow': '30px 40px 80px #00000000',
			})
		})
		
		if(cof>300){
			$('.menu__main').css({
				'padding-top': 0,
			})
		}

		if(cof<300){
			$('.menu').mouseenter(function(){
				$(this).css({
					'background': '#00000000',
					'box-shadow': '30px 40px 80px #00000000',
				})
			});
		}
	});


// ЭФФЕКТ КЕНЕТА
// let kenBurnsEffect = () => {
// 	let elements = document.querySelectorAll('.ken-burns');
// 	element = elements[0];
// 	element_1 = elements[1];
// 	element_2 = elements[2];
// 	element_3 = elements[3];
	
// 	let scale = 1.1;
// 	let dx = 0;
// 	let dy = 0;

// 	let updateBgPosition = () => {
// 			element.style.backgroundPosition = `${dx}px ${dy}px`;
// 			element_1.style.backgroundPosition = `${dx}px ${dy}px`;
// 			element_2.style.backgroundPosition = `${dx}px ${dy}px`;
// 			element_3.style.backgroundPosition = `${dx}px ${dy}px`;
// 	};

// 	let updateBgScale = () => {
// 			element.style.backgroundSize = `${scale * 100}%`;
// 			element_1.style.backgroundSize = `${scale * 100}%`;
// 			element_2.style.backgroundSize = `${scale * 100}%`;
// 			element_3.style.backgroundSize = `${scale * 100}%`;
// 	};
// 	let animate = () => {
// 		dx -= 0.005;
// 		dy += 0.005;
// 		scale += 0.0002;

// 			updateBgPosition();
// 			updateBgScale();

// 			requestAnimationFrame(animate);
// 	};
// 	function kenBurnsEffect(element, scale = 1.5, duration = 100) {
// 		element.style.transition = `transform ${duration}s linear`;
// 		element.style.transform = `scale(${scale})`;
// 	}
// 	animate();
// };
// setInterval(kenBurnsEffect, 10000);
// kenBurnsEffect();


// ПЕРЕХОД
	function myLoop() {

		let i = 0;
		let interval = setInterval(function(){

		if ( i === 4) {
				clearInterval(interval); // остановка интервала при достижении значения 6
				i = 1; // сброс счетчика до начального значения
				setTimeout(myLoop, 1); // запуск функции заново через 1 секунду
		} else { i++; }

	$('.cart__item').css({
		 	'background-image': "url('/assets/img/cart/1/image"+i+".jpg')",
			'transition': 'background-image 1.2s ease-in 1.2s',
			'image-rendering': 'smooth',
	});

		}, 3000);
	}
myLoop();


// СХЕМА
	$('.shema__sub-title').slideUp();

	$(".shema__item").mouseenter(function(){
		$(this).children('.shema__title').css({
			'font-weight':400,
			'transition': 'all 0.5s ease-out',
		});
    $(this).css({'z-index': '21',});
		$(this).children('.shema__sub-title').slideDown(400);
    $(this).animate({
        scale: 1.8,
    }, 1);
});

$(".shema__item").mouseleave(function(){
		$(this).children('.shema__title').css({
			'font-weight':200,
			'transition': 'all 0.5s ease-out',
		});
    $(this).css({'z-index': '20'});
		$(this).children('.shema__sub-title').stop(function(){$(".shema__item").mouseover();}).slideUp(400);
    $(this).animate({
        scale: 1,
    }, 1);
	});

//СХЕМА-CHILD
	$(".shema__item:first-child").mouseenter(function(){
		$(this).animate({
			left:'5%',
		}, 1);
	});
	$(".shema__item:first-child").mouseleave(function(){
		$(this).animate({
			left: 0,
		}, 1);
	});
	$(".shema__item:last-child").mouseenter(function(){
		$(this).animate({
			left:'-5%',
			height: '40%',
		}, 1);
	});
	$(".shema__item:last-child").mouseleave(function(){
		$(this).animate({
			left: 0,
			height: '150px',
		}, 1);
	});
