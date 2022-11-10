$(function(){
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
  });



  $('.b_tab li').first().addClass("activeClass");
  $(".tab-contents").not(':first').hide();
  
    $('.b_tab li').on('click',function(){
      $(this).addClass("activeClass").siblings().removeClass("activeClass");
      var link = $(this).find("a").attr("href");
      var link_num = link.substr(link.length-1);
      $("select#tabmenu option").eq(link_num-1).prop("selected", "selected");
      $(".tab-contents").hide();
      $(link).show();
    });
    
    $("select#tabmenu").on("change",function(){
      var select_link = $("select#tabmenu").val();
      var select_num = $(this).prop('selectedIndex');
      $('.b_tab li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
      $(".tab-contents").hide();
      $(select_link).show();
      console.log(select_link);
    });