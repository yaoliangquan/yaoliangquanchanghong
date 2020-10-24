       
    //    轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    }, 
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 3000,//3秒切换一次
        disableOnInteraction: false,
      },
      effect : 'fade',//渐变的方式切换
      // 如果需要分页器
   
  })   
  
