"use strict";var id=window.location.href.split("?")[1],ID=Number(id);$.ajax({url:"../data/data2.json",dataType:"json",success:function(n){$.each(n,function(n,a){var c=a.right;$.each(c,function(n,c){a.id==ID&&$(".product_list").prepend('\n                <a href="./detailpage.html?'.concat(a.id,"&").concat(n,'">\n                <div class="product_list_box">\n                    \x3c!-- 放图片 --\x3e\n                    <div class="product_img" >\n                        <img src=').concat(c.src,' alt="">\n                    </div>\n                    \x3c!-- 放文字数据 --\x3e\n                    <div class="product_text">\n                        <p>').concat(c.txt1,"</p>\n                        <span>").concat(c.price,'</span>\n                        <a>0人评价</a>\n                    </div>\n                    \x3c!-- 放按钮 --\x3e\n                    <div class="product_change">\n                        <div class="product_change_l">\n                            <input type="checkbox">对比\n                        </div>\n                        <div class="product_change_c">\n                            收藏\n                        </div>\n                        <div class="product_change_r">\n                            加入购物车\n                        </div>\n                    </div>\n                </div>\n            </a>\n\n\n                '))})})}});