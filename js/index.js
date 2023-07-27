$(window).on('scroll',function(){

    if (matchMedia("screen and (min-width: 768px)").matches) {
        if($(window).scrollTop()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
      } else {
        if($(window).scrollTop()){
            $('.contents').addClass('active');
        }else{
            $('.contents').removeClass('active');
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
    var imgs;
    var img_count;
    var img_position = 1;
    var img_name;
    imgs = $(".section_content_box");
    img_count = imgs.children().length;

    $('.back').click(function(){
        back();
    });
    $('.next').click(function(){
        next();
    });
    function back(){
        if(1 <  img_position){
            console.log("img_position: "+img_position);
            $('.section_content_box_'+img_position).hide();
            img_position--;
            $('.section_content_box_'+img_position).show();
        }
    }
    function next(){
        if(img_count >  img_position){
            console.log("img_position: "+img_position);
            $('.section_content_box_'+img_position).hide();
            img_position++;
            $('.section_content_box_'+img_position).show();
        }
    }
});
    //맵 조작 자바스크립트
    let places = document.querySelector(".places")
    let child = places.children;
    let content_h1 = document.querySelector(".artice_content_sub h1");
    let content_h3 = document.querySelector(".artice_content_sub h3");
    let number = document.querySelector(".region_num");

    child[0].addEventListener("click",function(){
        content_h1.innerText = "제주도 해맞이해안로";
        content_h3.innerText = "제주도에서 가장 아름다운 해안도로로 손꼽히는 해맞이해안로는 제주도의 동북 해안을 두루 거쳐 간다. 제주시 구좌읍 김녕해수욕장에서 시작되는 이 길은 구좌읍 윌정, 행원, 한동, 세화, 하도, 종달리 등의 바닷가 마을들 두루 거쳐 서귀포시 성산읍 오조리까지 28km쯤 이어진다. 바다와 어깨를 맞대고 이어지는 이 해안 도로에서는 제주도의 독특한 자연, 민속, 생태, 풍물 등을 다채롭게 만날 수 있다.";
        child[0].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#E7BDBD"; 
        number.innerText = "06";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[0]){}
            else{child[i].style.animation="";}
        }
    });
    child[1].addEventListener("click",function(){
        content_h1.innerText = "화천 파로호 산소길";
        content_h3.innerText = "강원도 화천군은 댐과 호수의 고장이다. 화천댐과 평화의댐, 춘천호와 파로호가 화천에 있다. 이처럼 ‘호반의 도시’ 춘천만큼이나 댐과 호수가 많은 화천은 ‘물의 나라’라고도 불린다. 물 위에 붕어섬이 떠 있고 물 위로 100리 산소길이 이어진다.";
        child[1].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#A8AED2"; 
        number.innerText = "09";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[1]){}
            else{child[i].style.animation="";}
        }
    });
    child[2].addEventListener("click",function(){
        content_h1.innerText = "강릉 경포호 산소길";
        content_h3.innerText ="풍광 좋고 운치 그윽한 경포에는 경포호 산소길이 개설돼있다. 강원도 곳곳의 명승지와 절경을 두루 거쳐 가는 ‘강원 삼천리(1,200km)산소길’ 중에서도 으뜸으로 꼽힐 만큼 아름다운 호반길이다. 자전거길과 도보 전용로가 나란히 이어져 있어서 걷기도 좋고 자전거를 타고 달리기에도 안성맞춤이다. 순환형길이므로 어디서 출발해도 제자리로 되돌아온다.";
        child[2].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#B8EFC6"; 
        number.innerText = "08";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[2]){}
            else{child[i].style.animation="";}
        }
    });
    child[3].addEventListener("click",function(){
        content_h1.innerText = "경주 역사탐방 자전거길 ";
        content_h3.innerText = "경주는 신라의 천년 역사를 고스란히 간직한 고도(古都)이다. 어딜 가나 신라시대의 유적과 신화가 즐비하다. 오늘날의 경주는 우리나라의 대표적인 자전거 도시이기도 하다. 경주 시민의 상당수는 자전거를 일상적인 교통수단으로 이용한다. 외지에서 온 여행자들 중에서도 자전거를 타고 느긋하게 경주 시내의 여러 역사유적지를 둘러보는 사람들이 흔하게 눈에 띈다.";
        child[3].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#AAB7A1"; 
        number.innerText = "07";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[3]){}
            else{child[i].style.animation="";}
        }
    });
    child[4].addEventListener("click",function(){
        content_h1.innerText = "신안 증도 자전거길 ";
        content_h3.innerText = "증도는 시간이 멈춘 듯 모든 것이 느릿하다. 습속의 변화도 더디고, 주민들의 생활도 느긋하다. 그러니 증도를 찾는 여행자들도 조급함을 버리면 모처럼 만에 심신의 여유를 만끽할 수 있다.";
        child[4].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#B2D2BB"; 
        number.innerText = "05";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[4]){}
            else{child[i].style.animation="";}
        }
    });
    child[5].addEventListener("click",function(){
        content_h1.innerText = "정읍 정읍천 자전거길";
        content_h3.innerText ="정읍 내장산은 전국 제일의 단풍 명산이다. 일찍이 지리산, 윌출산, 천관산, 능가산과 함께 호남의 5대 명산이자 조선8경 중 하나로 손꼽혔다. 1971년에는 우리나라의 8번째 국립공원으로 지정되기도 했다. 화려한 단풍과 천태만상의 기암절벽이 선경을 이루는 내장산 기슭에서 동진강의 제 1지류인 정읍천의 물길이 시작된다.";
        child[5].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#D6DAAA"; 
        number.innerText = "04";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[5]){}
            else{child[i].style.animation="";}
        }
    });
    child[6].addEventListener("click",function(){
        content_h1.innerText = "옥천 향수 100리길";
        content_h3.innerText ="금강의 유장한 물길이 굽이쳐 흐르는 옥천 땅에는 <향수>의 서정성과 운치를 고스란히 담은 ‘향수자전거길’이 개설돼 있고, 전체 8개 코스 가운데 가장 인기 있는 것은 향수 100리길이다.";
        child[6].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#79C9C6"; 
        number.innerText = "03";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[6]){}
            else{child[i].style.animation="";}
        }
    });
    child[7].addEventListener("click",function(){
        content_h1.innerText = "파주DMZ 자전거길";
        content_h3.innerText ="";
        child[7].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#ADE0E0"; 
        number.innerText = "01";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[7]){}
            else{child[i].style.animation="";}
        }
    });
    child[8].addEventListener("click",function(){
        content_h1.innerText = "옹진 덕적도 자전거길";
        content_h3.innerText ="덕적도는 인천에서 남서쪽으로 75km 거리에 위치한 섬으로 덕적도라는 지명은 '수심이 깊은 바다에 있는 섬'이라는 뜻의 '큰 물섬'을 한자어로 옮긴 것이라고 한다.덕적도는 섬인데도 평지가 적고 산지가 많아 대부분의 도로에도 비탈길 구간이 여럿이다. 특히 자전거도로의 중급코스 구간인 성황당고개와 국수봉고개는 평균 경사도가 12%에 이룰 만큼 가파르다.";
        child[8].style.animation="motion 0.5s linear 0s infinite alternate";
        number.style.background = "#A8AED2"; 
        number.innerText = "02";
        number.style.display = "block";
        for(var i=0;i<child.length;i++){
            if(child[i]==child[8]){}
            else{child[i].style.animation="";}
        }
    });


    //article 메뉴 페이지 조정
    let menu_bars = document.querySelectorAll("#article .menubar ul li")
    menu_bars.forEach((el,index)=>{
        el.onclick = () =>{
            if(index == 0){
                document.querySelector(".artice_content").style.display ="block";
                document.querySelector(".artice_content").style.display ="flex"; //이벤트 타고들어오면 flex 사라져있어서 설정
                document.querySelector(".artice_content1").style.display ="none";
                document.querySelector(".artice_content2").style.display ="none";   
                document.querySelector(".artice_content3").style.display ="none"; 
            }
            if(index == 1){
                document.querySelector(".artice_content").style.display ="none"; 
                document.querySelector(".artice_content1").style.display ="block";
                document.querySelector(".artice_content2").style.display ="none";  
                document.querySelector(".artice_content3").style.display ="none";  
            }
            if(index == 2){
                document.querySelector(".artice_content").style.display ="none"; 
                document.querySelector(".artice_content1").style.display ="none"; 
                document.querySelector(".artice_content2").style.display ="block";
                document.querySelector(".artice_content3").style.display ="none"; 
            }
            if(index == 3){
                document.querySelector(".artice_content").style.display ="none"; 
                document.querySelector(".artice_content1").style.display ="none";
                document.querySelector(".artice_content2").style.display ="none";  
                document.querySelector(".artice_content3").style.display ="block"; 
            }
        }
    });

//맵 좌표 스크립트
 let clientPoint = (event) =>{
     console.log(`화면 좌표 : (${event.clientX-506}, ${event.clientY-164})`);
 }
 window.addEventListener('click',e=>{
     clientPoint(e);
 });

    
    

    

