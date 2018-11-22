$(document).ready(function() {


  $("a").click(function(){
      $(this).css({
        'color': 'black',
        'font-style': 'italic'
      });
      $(this).parent("td").css({
        'background-color': '#E5E5E5',
        'font-style': 'italic'
      });
    });

});
