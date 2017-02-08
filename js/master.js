// JavaScript Document
(function() {
	"use strict";
var div = document.querySelector('#cars');
var images = div.querySelectorAll('.target');
var modelId = document.querySelector('.click-header');

function makeRequest() {
		httpRequest = new XMLHttpRequest();

		if (!httpRequest) {
			console.log('right');
			return false;
		}

		httpRequest.onreadystatechange = mainmodel;
		httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id);
		httpRequest.send();
	}
	
	function mainmodel() {
		if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
			//parse stringified result
			var modelData = JSON.parse(httpRequest.responseText);
			modelId.firstChild.nodeValue = modelData.modelName;
		}
	}
			//[].forEach.call(document.querySelectorAll('.hidden'), function(item) {
				//item.classList.remove('hidden');
			//});




[].forEach.call(images, function(images) {
		images.addEventListener('click', makeRequest, false);
	});
	
})();