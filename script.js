//Animated skillbox

$(window).on('scroll', function(){
  
    var wScroll = $(this).scrollTop();
    
    if (wScroll > $('#skills').offset().top - ($(window).height() / 1.2)) {
      $('.HTML').addClass('htmlskill');
      $('.CSS').addClass('cssskill');
      $('.JavaScript').addClass('jsskill');
      $('.ReactJS').addClass('rjskill');
      $('.ReactNative').addClass('rnskill');
    } else {
        $('.HTML').removeClass('htmlskill');
        $('.CSS').removeClass('cssskill');
        $('.JavaScript').removeClass('jsskill');
        $('.ReactJS').removeClass('rjskill');
        $('.ReactNative').removeClass('rnskill');
    }
    
  });

//CopyLink

$('#copy').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#text').text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert('Скопировано: vadya.dmitrichev26@gmail.com')
});