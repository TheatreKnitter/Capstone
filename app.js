var getMusic = function(bands) {

	

	$.ajax({
		dataType: 'jsonp',
		type: "Get",
		url:"https://www.tastekid.com/api/similar?q=" + bands + "&type=music&k=244514-FindNuMu-JLIXASE2&limit=10&info=1",
		q: "bands",
		info: 1,
		jsonpCallback: "logResults"
		
	})

	.done(function(result){ 
		$.each(result.Similar.Results, function(i, item) {
			var user = showMusic(item);
			$('.results').append(user);
		});
	});
};

var showMusic = function(music){
	var template = $('.templates').clone();
	template.find('.results').append('<dt>Artist:</dt>').append('<dd class="artist"></dd>');
	template.find('.artist').text(music.Name);
	template.find('.results').append('<dt>Description:</dt>').append('<dd class="description"></dd>');
	template.find('.description').text(music.wTeaser);
	template.find('.results').append('<dt>youTube link:</dt>').append('<dd class="youtube"></dd>');
	template.find('.youtube').html('<a target="_blank" '+'href=' + music.yUrl + '>Take me to the Video!</a>');

	$(".search").append(template);
	template.removeClass("templates");
	template.removeClass("hidden");
};


function logResults(json){
		console.log(json);
};



$(document).ready(function(){
	$('.collect').submit(function(e){
		e.preventDefault();
		var bands = $(this).find("input[name='user-favs']").val();
		$('.results').html('');
		getMusic(bands);
		console.log(bands);
	});
})

