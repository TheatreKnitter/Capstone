var getMusic = function(bands) {

	

	$.ajax({
		dataType: 'jsonp',
		type: "Get",
		url:"https://www.tastekid.com/api/similar?q=" + bands + "&type=music&k=244514-FindNuMu-JLIXASE2&limit=10&info=1",
		q: "bands",
		info: 1,
		//dataType: "jsonp",
		jsonpCallback: "logResults"
		
	});

};

var showMusic = function(music){
	var result = $('.templates').clone();
	var  musicElem = result.find('.artist');
	var decription = result.find('.description');
	var youtube = result.find('.youtube');
};


function logResults(json){
		console.log(json);
		//console.log(json.array[0].name);
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

