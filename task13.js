var arr=["12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg"];
		var index = 0 ;

		function slider(argument) {
			var img = document.getElementById("imags");
			img.src ="img/"+ arr[index];
			index++;
			if (index==arr.length) 
				index=0;
				window.setTimeout("slider()",12000);
			
		}



/* scroll animation */


const flightPath = {
	curviness : 1.25 , 
	autoRotate :true ,
	values :[
		
		{x:100 , y :-5},
		{x:800 , y :-400},
		{x:window.innerWidth , y :-400},
		
		
		
		
		
		
		
	]
}

const tween = new TimelineLite();

tween.add(
	TweenLite.to(".plane" , 1 , {
		bezier:flightPath,
		ease : Power1.easeInOut

	})
	);

const _controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".scroll",
  duration: 2000, //scroll time here
  triggerHook: 0,
})
  .setTween(tween)
  //   .addIndicators()  Indicatior here
  .setPin(".scroll")
  .addTo(_controller);


