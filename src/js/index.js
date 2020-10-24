
$.ajax({
    url:"../data/data2.json",
    dataType:"json",
    success:function(data){
        // console.log(data)
        // 主页商品列表

        $.each(data,function(i,v){
            // console.log(v)
            // console.log(data)
            var right = v.right;
            $.each(right,function(index,item){
                // console.log(i)
                $(".content_bottom").eq(i).append(`
                <div class="b_r">
                    <div class="b_r_box" style="width:239px;">
                        <a href=""><img src=${item.src} alt="" style="width:160px;" ></a><br>
                        <a href="#" class="img_par">${item.txt1}</a><br><p>${item.text2}</p><span>${item.price}</span>
                    </div>
            </div>
                `)
            })
        })
        
    },
})




