$( document ).ready(function() {
    //On load grab the window size
    let windowSize = $(window).width();
    // Check window size against typical mobile size and toggle sidebar
    if(windowSize <= 768){
        $('#wrapper').toggleClass("toggled");
        $('.sidebar-heading').toggleClass("d-none");
    }
    //When the window resizes , re-check responsiveness
    // $(window).on('resize', function(){
    //   let win = $(this); 
    //   if (win.width() <= 768) {
    //   $('#wrapper').toggleClass("toggled");
    //   $('.sidebar-heading').toggleClass("d-none");}
    // });
    //Toggle menu large or small
    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass("toggled");
        $('.sidebar-heading').toggleClass("d-none");
      });

 });

