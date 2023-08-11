$(window).resize(function() { 
    if(matchMedia("screen and (min-width: 1400px)").matches){
        $(".article2_content_imgs").css("height","260px");
    }else if(matchMedia("screen and (min-width: 768px) and (max-width: 1399px) ").matches){
        $(".article2_content_imgs").css("height","190px");
    }else if(matchMedia("screen and (max-width: 767px)").matches){
        $(".article2_content_imgs").css("height","23vw");
    }
});
$(window).on('scroll',function(){
    
   
    if (matchMedia("screen and (min-width: 768px)").matches) {
        if($(window).scrollTop()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
      } else {
        if($(window).scrollTop()){
            $('header .contents').addClass('active');
        }else{
            $('header .contents').removeClass('active');
        }
      }
});
$(document).ready(function(){
    
    $("header .contents .nav").hover(function(){
        $("header").css("background-color","#fff");
      },function(){
         $("header").css("background-color","");
      });

     var $firstmenu = $('header .contents .nav>ul>li'),
     $header = $('header');
     $firstmenu.mouseenter(function(){
    $header.stop().animate({height:'270px'},200);
     })
     .mouseleave(function(){
    $header.stop().animate({height:'125px'},200);
    });


    $('header .contents .nav>ul>li:nth-of-type(1)').hover(function(){
        $('.submenu1').show();
        $('.submenu1').css('opacity','1');
        $('.submenu2').hide();
    },function(){
        $('.submenu1').css('opacity','0');
        $('.submenu1').hide();
    });

    $('header .contents .nav>ul>li:nth-of-type(2)').hover(function(){
        $('.submenu2').show();
        $('.submenu1').hide();
        $('.submenu2').css('opacity','1');
    },function(){
        $('.submenu2').css('opacity','0');
        $('.submenu2').hide();
    });

    $('header .contents .nav>ul>li:nth-of-type(4)').hover(function(){
        $('.submenu4').show();
        $('.submenu4').css('opacity','1');
    },function(){
        $('.submenu4').css('opacity','0');
        $('.submenu4').hide();
    });

    //슬라이드 좌/우 이동 자바스크립트
    let w = $(window).innerWidth();
    $(window).resize(function(){
        w=$(window).innerWidth();
    });
    function prev(){
        $('.section_content_box_1:last').prependTo('.section_content_box');
        $('.section_content_box').css('margin-left',-w);
        $('.section_content_box').stop().animate({marginLeft:0},800);
    }
    function next(){
        $('.section_content_box').stop().animate({marginLeft:-w},800,function(){
        $('.section_content_box_1:first').appendTo('.section_content_box');
        $('.section_content_box').css({marginLeft:0});
        });
    }
    $('.back').click(function(){
        prev();
    });
    $('.next').click(function(){
        next();
    });    

    // var slice_i =0;
    // function slide(){
    //     slice_i++;
    //     if(slice_i>$('.section_content_box_1:last').index()){
    //         slice_i =0;
    //     };
    //     $('.section_content_box_1').eq(slice_i).css({"opacity":"1",
    //                                           "transition" : "all 3s"
    //     });
    //     $('.section_content_box_1').eq(slice_i-1).css({"opacity":"0",
    //     "transition" : "all 3s"
    //     });
    // }
    // setInterval(slide,7000);

    //article 메뉴 페이지 조정
    let i_d;
    $(".tab_menu").click(function(){
        i_d=($(this).index());
        $(this).addClass("port_back").siblings().removeClass("port_back");
        $(".cont_boxs").eq(i_d).show().css("display","flex").siblings().hide();
        
    });

    //content2 이미지 커지기    
    if($(window).innerWidth()>=1400){
        $(".article2_content_imgs").mouseenter(function(){
            $(this).css({"height":"380px",
                         "border-radius":"140px"
                        }).siblings().hide().end().children(1).show();
           
        }).mouseleave(function(){
            $(this).css({"height":"260px",
                         "border-radius":"70%",
                        }).siblings().fadeIn().end().children('.addback').hide();
        });
    }else if($(window).innerWidth()>767 && $(window).innerWidth()<1400){
        $(".article2_content_imgs").mouseenter(function(){
            $(this).css({"height":"280px",
                         "border-radius":"260px"
                        }).siblings().hide().end().children(1).show();
           
        }).mouseleave(function(){
            $(this).css({"height":"190px",
                         "border-radius":"70%",
                        }).siblings().fadeIn().end().children('.addback').hide();
        });
    }else if($(window).innerWidth()>0){
        $(".article2_content_imgs").mouseenter(function(){
            $(this).css({"height":"40vw",
                         "border-radius":"260px"
                        }).siblings().hide().end().children(1).show();
           
        }).mouseleave(function(){
            $(this).css({"height":"23vw",
                         "border-radius":"70%",
                        }).siblings().fadeIn().end().children('.addback').hide();
        });
    }
    //content2 이모티콘 애니메이션
    $(".contents_circle").mouseenter(function(){
        $(this).children().css({"transform":"scaleX(-1)"}).end().css("box-shadow","6px 8px 8px hsl(0deg 0% 0% / 0.4)");
    }).mouseleave(function(){
        $(this).children().css({"transform":"scaleX(1)"}).end().css("box-shadow","6px 8px 8px hsl(0deg 0% 0% / 0.2)");
    });
    
});



//맵 좌표 스크립트
//  let clientPoint = (event) =>{
//      console.log(`화면 좌표 : (${event.clientX-506}, ${event.clientY-164})`);
//  }
//  window.addEventListener('click',e=>{
//      clientPoint(e);
//  });



    
    

    

