(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $("#surveyButton").click(function() {
      $("body").scrollTo("#survey-container");
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
