(function(){
  'use strict';

  new WOW().init();
  
})();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function removeHash () { 
  history.pushState("", document.title, window.location.pathname
                                                     + window.location.search);
}

$( document ).ready(function() {
  removeHash();
});

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});
