const mainSlide = new Swiper('.main-slide',{
  effect: 'fade',
  loop: true,
  speed : 1000,
  // autoplay: {
  //   delay: 3000,
  // },
  pagination:{
    el:".pagination"
  }
})
const bannerSlide = new Swiper('.ad-top .banner-slide',{
  loop: true,
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
 
})

const pageBannerSlide = new Swiper('.sc-banner .banner-slide',{
  loop: true,
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
  pagination:{
    el:".fraction",
    type:"custom",
    renderCustom:function(swiper, current, total){
      return `<span class="curr">${current}</span>/<span class="total">${total}</span>`
    }
  },
})

const recommendSlide = new Swiper('.recommend-slide',{
  pagination:{
    el:".pagination"
  }
})

const cateSlide = new Swiper('.cate-slide',{
  speed : 1000,
  slidesPerView : 2.2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  pagination:{
  }
})

let lastScroll = 0;
$(window).scroll(function(){

  curr = $(this).scrollTop();

  if (curr > 0) {
    $('#header').addClass('fixed');
    
    if (curr > lastScroll) {
      $('.quick').addClass('hide');
      
    } else {
      $('.quick').removeClass('hide');
    }
        lastScroll = curr;
  }else{
    $('.quick').addClass('hide');
    $('#header').removeClass('fixed');
  }
})
$(window).trigger('scroll');




$('#goTop').click(function(e){
  e.preventDefault();

  window.scrollTo({top:0,behavior:"smooth"})
})

$('#btnMenu').click(function(){
  $('#sideMenu').addClass('on')
  $('body').addClass('hidden')
})
$('#sideMenu .btn-close, .dimmed').click(function(){
  $('#sideMenu').removeClass('on')
  $('body').removeClass('hidden')
})

$('#sideMenu .depth1-tit').click(function(e){
  e.preventDefault();

  $(this).toggleClass('active').siblings('.depth2').stop().slideToggle();
})

$('.tab a').click(function(e){
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.tab a').removeClass('active');
  $(this).addClass('active');

  $(tabName).addClass('active').siblings().removeClass('active');
})

$('#btnSearch').click(function(){
  $('.group-search').addClass('active');
})
$('#btnClose').click(function(){
  $('.group-search').removeClass('active');
})

/** gnb */
$('#menuMore').click(function(){
  $('#gnb').toggleClass('on');
  $('#gnb .gnb-bottom').stop().slideToggle();

})