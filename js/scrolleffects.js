'use strict';
$(function(){
	
	var scrollMagicController = new ScrollMagic.Controller();
	
	var barScene = new ScrollMagic.Scene({
		reverse: false,
		triggerElement: "#bar1, #bar2, bar3 "
	})
	.on('start', function(){
		bar1.animate(0.80);
		bar2.animate(0.77);
		bar3.animate(0.75);
		bar4.animate(0.60);
		bar5.animate(0.70);
		
		
	});
	
	var masonScene = new ScrollMagic.Scene({
		reverse: false,
		triggerElement: '.masonPortfolio'
	})
	.on('start', function(){
		var $container = $('.masonPortfolio');
		$container.imagesLoaded(function(){
			$container.masonry({
				isAnimated: true,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				  },
            	itemSelector: '.tileItem',
			})
			var $children = $container.children();
    		$children.addClass("animated zoomIn")
		})
	})
	;
	
	barScene.addTo(scrollMagicController);
	masonScene.addTo(scrollMagicController);
});



var bar1 = new ProgressBar.Line('#bar1', {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#FFEA82',
	trailColor: '#eee',
	trailWidth: 5,
	svgStyle: {width: '100%', height: '400%'},
	from: {color: '#81bde9'},
	to: {color: '#2b90d9'},
	step: (state, bar) => {
		bar.path.setAttribute('stroke', state.color);
	}
});
var bar2 = new ProgressBar.Line('#bar2', {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#FFEA82',
	trailColor: '#eee',
	trailWidth: 5,
	svgStyle: {width: '100%', height: '400%'},
	from: {color: '#81bde9'},
	to: {color: '#2b90d9'},
	step: (state, bar) => {
		bar.path.setAttribute('stroke', state.color);
	}
});
var bar3 = new ProgressBar.Line('#bar3', {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#FFEA82',
	trailColor: '#eee',
	trailWidth: 5,
	svgStyle: {width: '100%', height: '400%'},
	from: {color: '#81bde9'},
	to: {color: '#2b90d9'},
	step: (state, bar) => {
		bar.path.setAttribute('stroke', state.color);
	}
});
var bar4 = new ProgressBar.Line('#bar4', {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#FFEA82',
	trailColor: '#eee',
	trailWidth: 5,
	svgStyle: {width: '100%', height: '400%'},
	from: {color: '#81bde9'},
	to: {color: '#2b90d9'},
	step: (state, bar) => {
		bar.path.setAttribute('stroke', state.color);
	}
});
var bar5 = new ProgressBar.Line('#bar5', {
	strokeWidth: 4,
	easing: 'easeInOut',
	duration: 1400,
	color: '#FFEA82',
	trailColor: '#eee',
	trailWidth: 5,
	svgStyle: {width: '100%', height: '400%'},
	from: {color: '#81bde9'},
	to: {color: '#2b90d9'},
	step: (state, bar) => {
		bar.path.setAttribute('stroke', state.color);
	}
});

