jQuery(document).ready(function() {

    $("select").material_select();


    $("#signup").click(function() {
        $("#registration").slideDown();
    });

    //Registration perso
    $("#is_open").on("change", function(){
         if($(this).prop("checked")){
             $("#about_open").show();
         }else{
             $("#about_open").hide();
         }

    });

    //Registration TGM perso
    $("#is_open_tgm").on("change", function(){
         if($(this).prop("checked")){
             $("#about_open_tgm").show();
         }else{
             $("#about_open_tgm").hide();
         }

    });


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

    //Show the sliders
    jQuery(document).ready(function() {
        $("#show_s1").click(function() {
            $("#slider_one").slideDown();
        });
        $("#show_s2").click(function() {
            $("#slider_two").slideDown();
        });
        $("#show_s3").click(function() {
            $("#slider_three").slideDown();
        });
        $("#show_s4").click(function() {
            $("#slider_four").slideDown();
        });

    });
                

                   
//MOBILE NAVIGATION 
    var showRight_1 = document.getElementById( "showRight_1" ),
    showRight_2 = document.getElementById( "showRight_2" ),
    hideRight = document.getElementById( 'hideRight' ),
    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    body = document.body;
    nav_open = false;
    
    showRight_1.onclick = function(event) {
        "use strict";
        event.preventDefault();
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        nav_open = true;
        return false;
    };
    
    showRight_2.onclick = function(event) {
        "use strict";
        event.preventDefault();
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        nav_open = true;
        return false;
    };

    //Hiding nav after clicking onto menu element
    menuRight.onclick = function(event) {
        "use strict";
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        nav_open = false;
    };
    
    var hasParent = function(el, id){
    if (el) {
        do {
            if (el.id === id) {
                return true;
            }
            if (el.nodeType === 9) {
                break;
            }
        }
        while((el = el.parentNode));
    } return false; };
    
    
    document.addEventListener('click', function(e) {
            if (nav_open && !hasParent(e.target, 'cbp-spmenu-s2') ) {
                e.preventDefault();
                classie.remove( menuRight, 'cbp-spmenu-open' );
                nav_open = false;
            }}, true );
    
    document.addEventListener('touchend', function(e){
            if (nav_open && !hasParent(e.target, 'cbp-spmenu-s2') ) {
                e.preventDefault();
                classie.remove( menuRight, 'cbp-spmenu-open' );
                nav_open = false;
                return false;
            }}, true );  
                 
        //Nav Bar show/hide after scrolling
        var $head = $( '#menu_bar' );
        $( '.menu_bar-waypoint' ).each( function(i) {
            var $el = $( this ),
                animClassDown = $el.data( 'animateDown' ),
                animClassUp = $el.data( 'animateUp' );
                

            $el.waypoint( function( direction ) {
                if( direction === 'down' && animClassDown ) {
                    $head.attr('class', 'menu_bar mdl-color--primary ' + animClassDown);
                }
                else if( direction === 'up' && animClassUp ){
                    $head.attr('class', 'menu_bar mdl-color--primary ' + animClassUp);
                }
            }, { offset: function() {
                navbarheight = $("#menu_bar").outerHeight()+1;
                return navbarheight;
                }
             } );
        } );
        
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut(300); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
        $.fn.lightspeedBox();
    })
            
    //Afficher le slide when you click on the link(Events,Trainig....)
    document.querySelector("#here1").onclick = function() {
        if (window.getComputedStyle(document.querySelector('#here_div1')).display=='none'){
            document.querySelector("#here_div1").style.display="block";
        } 
    }
    document.querySelector("#here2").onclick = function() {
        if (window.getComputedStyle(document.querySelector('#here_div2')).display=='none'){
            document.querySelector("#here_div2").style.display="block";
        } 
    }
    document.querySelector("#here3").onclick = function() {
        if (window.getComputedStyle(document.querySelector('#here_div3')).display=='none'){
            document.querySelector("#here_div3").style.display="block";
        } 
    }
    document.querySelector("#here4").onclick = function() {
        if (window.getComputedStyle(document.querySelector('#here_div4')).display=='none'){
            document.querySelector("#here_div4").style.display="block";
        } 
    }

    $(".medi").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("id");
        $(".medi").removeClass("active");
        $(this).addClass("active");
        var num = id.substr(3);

        $(".cite").hide();
        $("#cite"+num).show();
        console.log($("#cite"+num).show());
    })

    $(".modal-trigger").leanModal();

    $("#contact_form").on("submit", function(e){
        e.preventDefault();
        var subject = $(this).find("#contact_subject").val();
        var email = $(this).find("#contact_email").val();
        var msg = $(this).find("#contact_msg").val();
        var name = $(this).find("#contact_name").val();
        var cs = $("#contact_sending").addClass("shown");
        console.log("sending");

        $.post("php/contact.php", {"send_contact": "1", "name": name, "subject": subject, "msg": msg, "email": email}, function(d){
            cs.removeClass("shown");
            var cst = $("#contact_sent").addClass("shown");
            if(d!=1){
                cst.text("Error :(");
            }else{
                $("#contact_form").find("input, textarea").val("");
            }

            setTimeout(function(){
                cst.removeClass("shown");
            }, 1000);
            
        })
    })

});

function formation_info(id) {
    var mo = $("#modal1").find("#modal_overlay").show();
    $.ajax({
        url:'php/formation_ajax.php?id='+id,
        // type:'GET',
        dataType:'json',
        success : function(data){   
            mo.hide();

            $("#modal1 h4#title").text(data.title);
            $("#modal1 .for span[name='content']").text(data.content);
            $("#modal1 .for span[name='formateur']").text(data.formateur);
            $("#modal1 .for span[name='horaire']").text(data.date);
            $("#modal1 .for span[name='time']").text(data.time);
            $("#modal1  a[name='link']").html('<a name="link" target="_blank" href="'+data.link+'">'+data.link+'</a>');

            $("#modal1  input[name='id_f']").html('<input type="text" name="id_f" value="'+
                data.id_formation+'" hidden="hidden"/>');
            

            
        }
    });

}

function tgm_info() {
    var mo = $("#modal2").find("#modal_overlay").show();
}


document.querySelector("#contact_subject2").onclick = function() {
            document.querySelector("#contact_subject").value="OMC mag: Rédaction";
}
document.querySelector("#bib").onclick = function() {
            document.querySelector("#contact_subject").value="OMC bibliothèque: Contribution";
}
document.querySelector("#plus").onclick = function() {
            document.querySelector("#contact_subject").value="OMC formations: Proposition";
}      