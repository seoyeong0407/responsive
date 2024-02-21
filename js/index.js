$(document).ready(function(){
  /* darkmode */
  let chk = true;
  
  $(".slide_button").click(function(){
    if(chk){
      $(this).stop().animate({left:"55%"},500);
      $("section").stop().animate(
        {backgroundColor: "#1a1a1a"}, 500)
      $(".nature_info,.v_color_info,.ai_info,.bento_info,.bento div").stop().animate({backgroundColor:"#000"},500);
      $(".bento div p").stop().animate({color:"#F5FF83"},500);
      $(".ai_info h2, .ai_info p").stop().animate({color:"#02DFFC"},500);
      $(".v_color_info h2, .v_color_info p").stop().animate({color:"#FF83D5"},500);
      $(".nature_info h2, .nature_info p").stop().animate({color:"#85FF83"},500);

      chk = false;

    }else{
      $(this).stop().animate({left:"10px"},500);
      $("section").stop().animate(
        {backgroundColor: "#f4f2ff"}, 500)
      $(".nature_info").stop().animate({backgroundColor:"#85FF83"},500);
      $(".v_color_info").stop().animate({backgroundColor:"#FF83D5"},500);
      $(".ai_info").stop().animate({backgroundColor:"#02DFFC"},500);
      $(".bento div").stop().animate({backgroundColor:"#fff"},500);
      $(".bento div p, .ai_info h2, .ai_info p,.v_color_info h2, .v_color_info p, .nature_info h2, .nature_info p").stop().animate({color:"#000"},500);

      chk = true;
    };

  });  

  //모바일용 메뉴버튼_________ 
  $(".mo_view").css({"right": "-45%"});
	$(".close").hide();

	$(".mo_menu_btn").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "45%"});
		$(".close").show();
	});

  $(".mognb").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-45%"});
	});

	$(".close").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-45%"});
	});

});