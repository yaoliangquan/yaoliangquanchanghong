// 切换登录方式
$(function(){
    
    ($(".switch").children()).on("click",function(){
        $(this)
        .removeClass('no_click')
        .siblings()
        .addClass('no_click')
        .parent()
        .next()
        .children()
        .addClass('display_form')
        .eq($(this).index())
        .removeClass("display_form")
        .siblings()
        .addClass('display_form')  
    })
})

        var form = document.getElementsByTagName('form')[0];
        var nameInput = form.children[0];
        var passInput = form.children[2];
        // console.log(passInput)
        // var checkbox = form.children[3];
        // var username = getCookie('name');
        // if(username){
        //     nameInput.value = username;
        // }
        form.onsubmit = function(e){
            //阻止浏览器的默认跳转动作
            e = e||window.event;
            e.preventDefault?e.preventDefault():e.returnValue =false;
            //手动跳转到login.php
            // if(checkbox.checked){
            //     location.href = "./login.php?username="+nameInput.value+"&password="+passInput.value+"&expires=10";
            // }else{
                location.href = "../php/login.php?phone="+nameInput.value+"&password="+passInput.value;
            // }
            
        }
