/* global $ , alert , console*/
$(function () {
	  // fixed header
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky ) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    $(".card-header .btn-link").on('click' , function(){
      $(this).find(".icon-toogel").toggleClass("fa-arrow-circle-o-right fa-arrow-circle-o-down")
    })

    $("body").niceScroll();
     
});
