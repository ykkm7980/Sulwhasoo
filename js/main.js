$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();
});
$("header .center_box2 nav > ul > li").hover(function(){
    $("header .center_box2 nav > ul > li > ul").stop().slideDown();
    $("header .subbg").stop().slideDown();
});
$("header").mouseleave(function(){
    $("header .center_box2 nav > ul > li > ul").stop().slideUp();
    $("header .subbg").stop().slideUp();
});
$(".lang").click(function(){
    $(".lang_sub").stop().slideDown();
});
$(".lang_sub").mouseleave(function(){
    $(".lang_sub").stop().slideUp();
});


var swiper = new Swiper(".mySwiper", {
    // 자동 슬라이드
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    // 한 화면에 3개씩 보임
    slidesPerView: 3,
//   슬라이드 간격
    spaceBetween: 50,
//   한번에 이동할 슬라이드 개수
    slidesPerGroup: 1,
//   무한 반복
    loop: true,
    loopFillGroupWithBlank: true,
//   동그란 버튼 클릭하면 슬라이드됨
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
//   왼쪽 버튼 , 오른쪽 버튼
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
//------------------best 슬라이드----------------------------------
var swiper = new Swiper(".mySwiper2", {
    // 자동 슬라이드
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    // 한 화면에 3개씩 보임
    slidesPerView: 5,
//   슬라이드 간격
    spaceBetween: 20,
//   한번에 이동할 슬라이드 개수
    slidesPerGroup: 5,
//   무한 반복
    loop: true,
    loopFillGroupWithBlank: true,
//   동그란 버튼 클릭하면 슬라이드됨
    pagination: {
    el: ".list .swiper-pagination",
    clickable: true,
    },
//   왼쪽 버튼 , 오른쪽 버튼
    navigation: {
    nextEl: ".list .swiper-button-next",
    prevEl: ".list .swiper-button-prev",
    },
});
//-------------------------footer 슬라이드--------------------------------------- 
var swiper = new Swiper(".mySwiper3", {
    // 자동 슬라이드
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    speed:4000,
    effect : 'fade',
    fadeEffect: {
    crossFade: true
    },
    // 한 화면에 1개씩 보임
    slidesPerView: 1,
//   슬라이드 간격
    spaceBetween: 1,
//   한번에 이동할 슬라이드 개수
    slidesPerGroup: 1,
//   무한 반복
    loop: true,
});

 
    //햄버거 메뉴에 클릭이벤트 설정
    $('.bu').click(function(){
        $('.popup').show();
    })
    // 팝업 영역에서 x 버튼을 클릭하면 팝업 영역 사라짐
    $('.close_btn').click(function(){
        $(".popup").hide(); 
    });

    // top버튼을 클릭하면 html1문서의 맨 위로 이동
    $('.top').click(function(){
        $('html, body').animate({"scrollTop":0});
    });

});
