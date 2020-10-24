<?php
include "./base.php";//解决中文乱码
$uname = $_POST["name"];
$uphone = $_POST["phone"];
$upassword = $_POST["password"];
$uemail = $_POST["email"];
// echo $uphone;
// echo $upassword;
// echo $uemail;
$conn = mysqli_connect("localhost","root","root","dengluzhuce");//与数据库建立连接
//执行sql语句
$sql = "INSERT INTO `table` VALUES (null,'$uphone','$upassword','$uname','$uemail')";
$res = mysqli_query($conn,$sql);
//断开链接
mysqli_close($conn);
if($res){
    header('location:../pages/login.html');
}else{
    echo "服务器错误";
}
?>