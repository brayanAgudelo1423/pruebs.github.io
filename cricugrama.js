$(document).ready(function(){
  $('.collapsible').collapsible();
});
$(document).ready(function(){
  $('.sidenav').sidenav();
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});