$(document).ready(function(){
    
 $('.texts').textillate({
     autoStart:true,
     loop: true,
       in: {
           effect: 'flipInX',
           shuffle: false,
           sync: true,
           
       },
       out: {
             effect: 'flipOutX',
             shuffle: false,
             sync: true,
             
       },
        
    });

	
//	var bar = new ProgressBar.Line('#containerBar', {
//		strokeWidth: 4,
//		easing: 'easeInOut',
//		duration: 1400,
//		color: '#FFEA82',
//		trailColor: '#eee',
//		trailWidth: 5,
//		svgStyle: {width: '100%', height: '500%'},
//		from: {color: '#FFEA82'},
//		to: {color: '#ED6A5A'},
//		step: (state, bar) => {
//		bar.path.setAttribute('stroke', state.color);
//	}
//});

//bar.animate(0.75);  // Number from 0.0 to 1.0


});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//function LoadBars(){
//	if(isScrolledIntoView($('#containerBar'))){
//		alert("woo");
//	}
//}

	





	





