"use strict";var NEWTIME=$('<p class="time">本场倒计时<br/>敬请期待。。。</p >');function formatDate(){for(var e=new Array(2,4,6,8,10,12,14,16,18,20,22,24),t=new Date,n=t.getHours(),r=new Date,o=0;o<e.length;o++)if(n<e[o]){n=e[o],r.setHours(n),r.setMinutes(0),r.setSeconds(0);break}var s=+new Date(r)-t,a=new Date;a.setTime(s);t=(t=a.getHours()-6)<10?"0"+t:t,s=(s=a.getMinutes())<10?"0"+s:s,a=a.getSeconds();return t+":"+s+":"+(a=a<10?"0"+a:a)}NEWTIME.appendTo($(".countdown")),$(".time").css({paddingTop:40,textAlign:"center",fontSize:26,color:"red"}),setInterval(function(){NEWTIME.html('<p class="time">本场倒计时<br/>'+formatDate()+"</p >"),NEWTIME.appendTo($(".countdown"))},1e3);