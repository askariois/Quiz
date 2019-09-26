$("input[type=radio]").on("change", function() {
  $(".next_button a").css('pointer-events', 'auto').addClass('Animated_button');
});