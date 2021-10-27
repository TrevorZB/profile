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


