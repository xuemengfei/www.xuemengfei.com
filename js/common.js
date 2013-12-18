var clientHeight = 0;

window.onload = function(){
  resizeWrap();
}

window.onresize = function(){
  resizeWrap();
}

function resizeWrap(){
  var wrappers = document.querySelectorAll('.wrapper');
  clientHeight = document.body.clientHeight;

  for (var i = 0, len = wrappers.length; i < len; i++) {
    wrappers[i].style.height = clientHeight + 'px';
  }
}
