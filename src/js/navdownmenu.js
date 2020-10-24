

//发送ajax请求data数据
$.ajax({
    url:"../data/data.json",
    dataType:"json",
    success:function(data){
        // console.log(data);
        $.each(data,function(i,v){
            // console.log(v)
            // console.log(v.pro)
            // console.log(i)

            var pro = v.pro;
            $.each(pro,function(index,value){
                // console.log(index)
                $('.nav_down_box2').eq(i).append(`  
                 <div class="nav_down_list">
                    <a href="#"><img src=${value.src} alt=""></a>
                    <p>${value.name}</p>
                    <p>${value.price}</p>
                </div>
            `)
            })
        })
    }
})
$('.nav_down_box2').css({'display':'none'})

// $('#nav').on('mouseenter',function(){
//     $(this).children('.nav_down_box').stop().slideDown();
// })
// $('#nav').on('mouseleave',function(){
//     $(this).children('.nav_down_box').stop().slideUp();
// })
var liArr = $('.nav_right_ul').children();
$.each(liArr,function(i,v){
    $(this).on("mouseenter",function(){
        // console.log(i)
        if(i==0||i==liArr.length-1){
            return;
        }else{
            // console.log(i)
            // console.log($('.nav_down_menu').children()[i])
            $('.nav_down_menu').children().eq(i).show().siblings().hide()
        }
    })
})

// $('.nav_down_list')
$('.show').on('mouseenter',function(){
    // console.log(1444444)
    $('.nav_down_box').stop().slideDown();
})
$('.show').on('mouseleave',function(){
    // console.log(133333)
    $('.nav_down_box').stop().slideUp();
})