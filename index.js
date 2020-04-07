// Navbar scroll
$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 200) {
      $(".topnav").css('background-color', 'rgba(255, 255, 255, .95)');
    } else {
      $(".topnav").css('background-color', 'transparent');
    }
  });
});
$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function(){
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 200){
      $(".topnav").css('border-bottom', '2px solid rgba(9, 64, 106, 1)');
    } else{
      $(".topnav").css('border-bottom', '0');
    }
  });
});
$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function(){
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 225){
      $(".navItem").css('color', 'rgba(9, 64, 106, 1)')
    } else {
      $(".navItem").css('color', 'rgba(255, 255, 255, 1)');
    }
  });
});

// Greensock animations
// gsap.from("#headline", {
//   duration:1,
//   y:20,
//   opacity:0,
//   delay:2}
// );
//
// gsap.from("#quoteText", {
//   duration:1.5,
//   y:60,
//   opacity:0,
//   delay:2}
// );
//
// gsap.from(".rightItem", {
//   duration:3,
//   opacity:0,
//   delay:2,
//   onComplete: complete,});
//
//   function complete(){
//     console.log("complete");
//   }
//
//
//   gsap.from(".leftItem h2", {
//     duration:1,
//     opacity:0,
//     delay:2,
//     y:50
//   });
//
//   gsap.from(".leftItem p", {
//     duration:1,
//     opacity:0,
//     delay:2.5,
//     y:50
//   });
//
//   gsap.from(".leftItem button", {
//     duration:1,
//     opacity:0,
//     delay:3,
//     y:50
//   });
