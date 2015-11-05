// Animation Toggle for KeyPress
$(document).keydown(function(e) {
    if (e.keyCode === 40 || e.keyCode === 38) {
    	$(".box").css('-webkit-animation-play-state', function(i, v) {
        	return v === 'paused' ? 'running' : 'paused';
    	});
    }
});

// Animation Toggle for onClick
$(document).click(function() {    
    $(".box").css('-webkit-animation-play-state', function(i, v) {
        return v === 'paused' ? 'running' : 'paused';        
    });
});