	/* 
			需求分析:
				1 鼠标移入small,mask显示,big显示
				2 鼠标移出small,mask隐藏,big隐藏
				3 mask跟着鼠标移动,鼠标在mask的中间
				4 big里面显示mask里面对应的放大图部分
		*/

		//获取相关元素
		function texiao(){
			var small = document.getElementById('bigImg');//小盒子
		var big = document.getElementById('hidebox');//大盒子
		var mask=document.getElementById('mask');//遮罩层
		var smallImg = small.children[0];//小图
		var bigImg = big.children[0];//大图

		// 1 鼠标移入small,mask显示,big显示
		small.onmouseenter = function(){
			big.style.display = "block";
			mask.style.display = "block";
		}
		// 2 鼠标移出small,mask隐藏,big隐藏
		small.onmouseleave = function(){
			big.style.display = "none";
			mask.style.display = "none";
		}
		// 3 mask跟着鼠标移动,鼠标在mask的中间
		small.onmousemove = function(e){
			e = e||window.event;
			//计算鼠标相对small的坐标 = 鼠标相对性页面的坐标 - box距离页面的距离
			var left = e.pageX - box.offsetLeft;
			var top = e.pageY - box.offsetTop;
			//由于鼠标必须在mask的中间,所有mask左上角的坐标需要减去自己宽度和高度的一般
			left = left - mask.offsetWidth/2;
			top = top - mask.offsetHeight/2;
			//边界检测
			if(left<0){
				left=0;
			}
			if(top<0){
				top=0;
			}
			if(left>box.offsetWidth-mask.offsetWidth){
				left=box.offsetWidth-mask.offsetWidth
			}
			if(top>box.offsetHeight-mask.offsetHeight){
				top=box.offsetHeight-mask.offsetHeight
			}
			mask.style.left = left+"px";
			mask.style.top = top+"px";

			// 4 big里面显示mask里面对应的放大图部分
			// 大图的marginLeft为负数表示左移,为正数表示右移动
			// mask距离small左边的距离/small的总宽度 = bigImg距离big左边的距离/bigImg的总宽度
			bigImg.style.marginLeft = - left*bigImg.offsetWidth/small.offsetWidth+"px";
			// mask距离small上部的距离/small的总高度 = bigImg距离big上面的距离/bigImg的总高度
			bigImg.style.marginTop = -top*bigImg.offsetHeight/small.offsetHeight+"px";
		}

		}


		var id = window.location.href.split("?")[1];
		// console.log(id)
		var ID = id.split("&")[0];
		var num = id.split("&")[1];

		$.ajax({
			url:'../data/data2.json',
			dataType:'json',
			async:false, // 是否异步,默认是true
			success:function(data){
				$.each(data,function(i,v){
					// console.log(v.id);
					var right = v.right;
					// console.log(right)
					// console.log(i)
					// console.log(v)
					if(v.id==ID&&right[num]){
					// console.log(right[num])
					// console.log(i)
					$('.pro-ele-main').append(`
					<div class="product-details">
					<div class="product-details-l" id="box">
						<!-- 放小图的盒子 -->
						<div id="bigImg" class="bigImg">
							<img src=${right[num].src} alt="">
							<!-- 遮罩层 -->
							<div id="mask" class="mask" >
							</div>
						</div>
						<!-- 放左边列表小图的盒子 -->
						<div class="smallImg-box">
							<button class="btn-left"></button>
							<div class="box-li">
								<img src=${right[num].src1} alt="" >
								<img src=${right[num].src2} alt="">
								<img src=${right[num].src3} alt="">
							</div>
							<button class="btn-right"></button>
						</div>
						<!-- 隐藏的大图盒子 -->
						<div id="hidebox" class="hidebox" >
							<img src=${right[num].src} alt="" >
						</div>
					</div>
					<div class="product-details-r">
						<!-- 标题 -->
						<div class="details-title">
						<span >${right[num].txt1}</span><button>加入对比</button>
						</div>
						<!-- 价格 -->
						<p class="datails-price">${right[num].price}</p>
						<!-- 地址 -->
						<div class="datails-location">
							配送地址： <select name="" id="" >
								<option value="">省/市/县</option>
							</select>  
							<p>服务信息： 由长虹官方发货，并提供售后服务。</p>
							<p>品牌：小小鸟长虹网店</p>
						</div>
						<!-- 数量 -->
						<div class="datails-num">
							<div class="datails-num-box">
								<button>-</button>
								<input type="text" value="1" class="goodsNumber">
								<button>+</button>
							</div>
							<div class="datails-move">
								加入购物车
							</div>
						</div>
					</div>
				</div>
					`)
					// console.log($('.bigImg').children()[0])
					$('.box-li').children().on('mouseenter',function(){
						// console.log($(this))
						$('.bigImg').children()[0].src=$(this)[0].src;
						$(this).addClass('yangshi').siblings().removeClass('yangshi')
						$('.hidebox').children()[0].src=$(this)[0].src
					});

					}
					
				})
				texiao()

			

			

			}
		})
		
		
		
		// var NAME = null;
		// var picture = null;
		// var jiage = null;
		// console.log(NAME)
		
		// async function qingqiu1(){
		// 	return await 
		// }
		
		// $('.datails-move').click(function(){
		// 	$.ajax({
		// 		url:'http://localhost/interface/addwq.php',
		// 		data:{
		// 			id:100,
		// 			name:right[num].txt1,
		// 			price:right[num].price,
		// 			img:right[num].src,
		// 			num:$('.goodsNumber').val()
		// 		},
		// 		success:function(res){
		// 			console.log(1)
		// 			if(res.code){
		// 				alert('商品加入成功')
		// 			}    
		// 		},
		// 		dataType:'json'
		// 	})
		// })

		$('.datails-move').on('click',function(){
			var	 NAME = $($('.details-title').children()[0]).text()
			var	 picture = $('.bigImg').children()[0]
			var	 jiage = $('.datails-price').text()
			console.log($('.goodsNumber').val())
			console.log(NAME,picture,jiage);
					$.ajax({
						url:'http://localhost/interface/addwq.php',
						data:{
							id:"100",
							name:NAME,
							price:jiage,
							img:picture,
							num:$('.goodsNumber').val()
						},
						success:function(res){
							console.log(1)
							if(res.code){
								alert('商品加入成功')
							}    
						},
						error:function(){
							console.log(1111)
						},
						dataType:'json'
					})
				})
				

	

		
