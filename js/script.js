$(function(){
	function go_to_form(){
		//$("#soon").hide();
	    $("#registration").show();
	    $("html, body").animate({scrollTop: $("body").prop("scrollHeight") }, 1000, "swing");
	}
    /*$("#sigup").on("click", function(){
		go_to_form();
    });

	if($(".fail_inner").length){
        //alert("sad");
		//go_to_form();
	}else */
    if($(".success_inner").length){
		$("form input, form textarea, form select").each(function(i, e){
			$(e).val("");
		});
	}

    // $('select').material_select();
	$("select").on("change", function(){
		if($(this).val()=="phd"){
			$("#student_id").prop("type", "text").removeAttr("length").removeAttr("pattern");
			$(".character-counter").hide();
		}else{
			$("#student_id").prop("type", "number").attr("length","12").attr("pattern",".{12}");
			$(".character-counter").show();
		}
	});

    $("#is_open").on("change", function(){
	 if($(this).prop("checked")){
		 $("#about_open").show();
	 }else{
		 $("#about_open").hide();
	 }

    });


    $(".overlay").on("click", function(e){
	  if(!$(e.target).is(".msg *")){
		  $t = $(this);
		  $t.fadeOut();
		  setTimeout(function(){
			  $t.remove();
		  }, 1000);
	  }
    });
    $("#field_selector").on("change", function(e){
    	if($(this).val()=="custom"){
    		$("#custom_field").show();
    	}else{
    		$("#custom_field").hide();
    	}
    })


});

function close_registration() {
            // $("#registration").css("display","none");
            $("#registration").fadeOut();
}

