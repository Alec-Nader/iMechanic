$( document ).ready(function() {
    
    //Toggle menu large or small
    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass("toggled");
        $('.sidebar-heading').toggleClass("d-none");
      });

 });

