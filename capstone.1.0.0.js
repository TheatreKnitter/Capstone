/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	//call to tastekid api
	var getMusic = function getMusic(bands) {
	
		$.ajax({
			dataType: 'jsonp',
			type: "Get",
			url: "https://www.tastekid.com/api/similar?q=" + bands + "&type=music&k=244514-FindNuMu-JLIXASE2&limit=10&info=1",
			q: "bands",
			info: 1,
			jsonpCallback: "logResults"
	
		}).done(function (result) {
			$.each(result.Similar.Results, function (i, item) {
				var user = showMusic(item);
				$('.results').append(user);
			});
		});
	};
	
	//appends page with search result data
	var showMusic = function showMusic(music) {
		var template = $('.templates').clone();
		template.find('.results').append('<dt>Artist:</dt>').append('<dd class="artist"></dd>');
		template.find('.artist').text(music.Name);
		template.find('.results').append('<dt>Description:</dt>').append('<dd class="description"></dd>');
		template.find('.description').text(music.wTeaser);
		template.find('.results').append('<dt>youTube link:</dt>').append('<dd class="youtube"></dd>');
		template.find('.youtube').html('<a target="_blank" ' + 'href=https://www.youtube.com/watch?v=' + music.yID + '&feature=player_embedded' + '>Take me to the Video!</a>');
	
		$(".search").append(template);
		template.removeClass("templates");
		template.removeClass("hidden");
	};
	
	//sets callback function and allows confirmation of correct call to api
	function logResults(json) {
		console.log(json);
	};
	
	$(document).ready(function () {
		$('.collect').submit(function (e) {
			e.preventDefault();
			var bands = $(this).find("input[name='user-favs']").val();
			$('.results').html('');
			getMusic(bands);
			console.log(bands);
		});
	});

/***/ }
/******/ ]);
//# sourceMappingURL=capstone.1.0.0.js.map