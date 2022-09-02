$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    let charCount = $(this).val().length;
    let counter = $(this).parent().children('.new-tweet-footer').children('.counter');
    let remainingChars = 140 - charCount;
    
    counter.text(remainingChars);
    if (remainingChars < 0) {
      counter.addClass("warning");
    } else {
      counter.removeClass("warning");
    }
  });
});

