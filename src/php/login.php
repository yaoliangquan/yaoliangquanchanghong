<?php
include "../php/base.php";//中文乱码解决
//获取前端传来的信息
$uname = $_GET["phone"];//获取传来的名字
$upassword = $_GET["password"];//获取传来的密码
// $expires = $_GET["expires"];//获取免登录时间
$conn = mysqli_connect("localhost","root","root","dengluzhuce");//与数据库建立连接
//执行sql语句
$sql = "SELECT * FROM `table` WHERE `name`='$uname'AND `password`='$upassword'";
$res = mysqli_query($conn,$sql);
// echo $res;
$row =  mysqli_fetch_all($res);//解析结果
mysqli_close($conn);//断开链接
if($row){
    // if($expires){
    //     //给浏览器写入cookie,有效期是10天
    //     setcookie('name',$uname,time()+10*24*60*60);
    // }else{
    //     //给浏览器写入cookie,会话时效
    //     setcookie('name',$uname);
    // }
    header('location:../pages/fist.html');
    // header('location:../js/index.js');
}else{
    echo "用户名或者密码错误";
}

?>