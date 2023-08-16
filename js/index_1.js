$(window).resize(function() {
     if(matchMedia("screen and (max-width: 767px").matches){
        location.reload();
     }else if(matchMedia("screen and (min-width: 768px").matches){
        location.reload();
     } 
})
$(document).ready(function(){


    //서브페이지 이미지 넘기기 기능
    let content_img = $("#content .contents_imgs img");
    let img_box = $("#content .contents_imgs");
    let img_count = content_img.length; 
    let img_position = 1;
    console.log(window.innerWidth);
    
    $(".arrow_img .back").click(function(){
        back();
    });
    $(".arrow_img .next").click(function(){
        next();
    });
    function back(){
        if(1<img_position && window.innerWidth>=1400){
            img_box.animate({left:'+=450px'});
            img_position--;
        }else if(1<img_position && 768<window.innerWidth && window.innerWidth<1400){
            img_box.animate({left:'+=42.9vw'});
            img_position--;
        }else if(1<img_position && window.innerWidth<768){
            img_box.animate({left:'+=80vw'});
            img_position--;
        }
    }
    function next(){
        if(img_position<img_count && window.innerWidth>=1400){
            img_box.animate({left:'-=450px'});
            img_position++;
        }else if(img_position<img_count && 768<window.innerWidth && window.innerWidth<1400){
            img_box.animate({left:'-=42.9vw'});
            img_position++;
        }else if(img_position<img_count && window.innerWidth<768){
            img_box.animate({left:'-=80vw'});
            img_position++;
        }
    }

    
        if($(window).innerWidth()<767){
        $(".nav ul li").mouseover(function(){
            $(this).children(".sub_menu").stop().slideDown();
        }).mouseout(function(){
            $(".sub_menu").stop().slideUp();
        });
        $(".menu_figure").click(function(){
            $(".menu_box nav").stop().slideToggle();
        });
        }else{
        $("nav > ul > li:nth-of-type(1) > a").on("click",function(){
            $("nav ul li:nth-of-type(1) ul").toggle("slow");
        });
        $("nav > ul > li:nth-of-type(2) > a").on("click",function(){
            $("nav ul li:nth-of-type(2) ul").toggle("slow");
        });
        $("nav > ul > li:nth-of-type(3) > a").on("click",function(){
            $("nav ul li:nth-of-type(3) ul").toggle("slow");
        });
        $('a').click(function(e) {
            e.preventDefault();
          });
    }
    
    //화면767 크기 main 메뉴
    $('.menu_img').click(function(){
        $('#right_header').css("right","0");
    });
    $('.header_end').click(function(){
        $('#right_header').css("right","-340px");
    });
    //767이하 크기 main 메뉴 조정
    let menu_index;
    $(".main_menu").click(function(){
        menu_index = $(this).index();
        $(this).addClass("port_back").siblings().removeClass("port_back");
        $(".main_menu_2").eq(menu_index).show().css("display","flex").siblings().hide();

    });

})

$(window).on('scroll',function(){
    
   
    if (matchMedia("screen and (min-width: 768px)").matches) {
        if($(window).scrollTop()){
            $('header').addClass('active');
            $('section').addClass('active');
        }else{
            $('header').removeClass('active');
            $('section').removeClass('active');
        }
      } else {
        if($(window).scrollTop()){
            $('header .contents').addClass('active');
        }else{
            $('header .contents').removeClass('active');
        }
      }
});

    

    

