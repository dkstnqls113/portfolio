var slides = document.querySelector('.slides'),
		slide = document.querySelectorAll('.slides li'),
		currentIdx = 0,
		slideCount = slide.length,
		orgslideCount = slide.length,
		prevBtn  =  document.querySelector('.prev'),
		slideWidth = 400,
		slideMargin = 30,
		nextBtn = document.querySelector('.next');		

		makeClone();

		function makeClone(){
			for(var i = 0; i<slideCount;i++){				
				var cloneSlide = slide[i].cloneNode(true);
				cloneSlide.classList.add('clone');
				slides.appendChild(cloneSlide);	
			}
			for(var i = orgslideCount -1; i>=0;i--){				
				var cloneSlide = slide[i].cloneNode(true);
				cloneSlide.classList.add('clone');
				slides.prepend(cloneSlide);	
			}
			updateWidth();
			setInitialPos();

			setTimeout(function(){
				slides.classList.add('animated');
			},100);			
		}		

		function updateWidth(){
			var currentSlides = document.querySelectorAll('.slides li');
			slideCount = currentSlides.length;

			var newWidth = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';
			slides.style.width = newWidth;
		}
		function setInitialPos(){
			var initialTransLateValue = -(slideWidth + slideMargin)*orgslideCount;
			console.log(initialTransLateValue);
			
			slides.style.transform = 'translateX('+initialTransLateValue+'px)';
		}


		function moveSlide(num){			
			slides.style.left = -num * (slideWidth + slideMargin) + 'px';

			currentIdx = num;

			if(orgslideCount == currentIdx ||  currentIdx == -orgslideCount ){
				//slides.classList.remove('animated');				

				setTimeout(function(){	
					slides.style.left = '0px';
					currentIdx = 0;
					slides.classList.remove('animated');		
				},500);	

				setTimeout(function(){		
					slides.classList.add('animated');		
				},700);				
				
				console.log(orgslideCount,currentIdx,'0 으로');		
				
			}			
			
		}

		nextBtn.addEventListener('click', function(){
			moveSlide(currentIdx + 1);
		});
		prevBtn.addEventListener('click', function(){		
			moveSlide(currentIdx - 1);
		});