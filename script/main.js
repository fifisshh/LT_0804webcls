const header = document.querySelector('#navbar');

window.addEventListener('scroll', ()=> {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
        $("#navbar").show();
    } else {
        header.classList.remove('scrolled');
        $("#navbar").hide();
    }
})

// about圓形微互動
$(window).bind('scroll',function(e){
    parallaxScroll();
});
  
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.cir1-home').css('top',(220-(scrolled*.2))+'px');
    $('.cirs1-home img').css('top',(650-(scrolled*.1))+'px');
    $('.cir2-home').css('top',(1800-(scrolled*.5))+'px');
    $('.cirs2-home img').css('top',(250-(scrolled*.1))+'px');
}

// Order alert
$(".order").click(function(){
    alert("X 此功能尚未解鎖");
});

// Loading
$(window).on('load', function(){
    setTimeout(removeLoader, 2500);
    // wait for page load PLUS two seconds.
});
  function removeLoader(){
      $( ".loader" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".container" ).remove(); //makes page more lightweight 
        document.getElementById("wrapper").style.display = "block";
    });  
  }