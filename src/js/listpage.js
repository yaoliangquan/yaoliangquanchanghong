var id = window.location.href.split("?")[1];
var ID = Number(id);
// console.log(ID);

$.ajax({
    url:'../data/data2.json',
    dataType:'json',
    success:function(data){
        $.each(data,function(i,v){
            // console.log(v.id);
            var right = v.right;
            // console.log(v.right);
            $.each(right,function(index,value){
                // console.log(index)
                if(v.id==ID){
                    // console.log(value)
                $('.product_list').prepend(`
                <a href="./detailpage.html?${v.id}&${index}">
                <div class="product_list_box">
                    <!-- 放图片 -->
                    <div class="product_img" >
                        <img src=${value.src} alt="">
                    </div>
                    <!-- 放文字数据 -->
                    <div class="product_text">
                        <p>${value.txt1}</p>
                        <span>${value.price}</span>
                        <a>0人评价</a>
                    </div>
                    <!-- 放按钮 -->
                    <div class="product_change">
                        <div class="product_change_l">
                            <input type="checkbox">对比
                        </div>
                        <div class="product_change_c">
                            收藏
                        </div>
                        <div class="product_change_r">
                            加入购物车
                        </div>
                    </div>
                </div>
            </a>


                `)
            }
            })
            
        })
    }
})
