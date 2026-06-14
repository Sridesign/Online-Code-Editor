<?php
//connection is executed
$servername = "localhost";
$username = "root";
$password = "";
$database="register";
$mysqli = new mysqli($servername,$username, $password,$database);
 
if(isset($_POST['submit'])){
	$t=$_POST['uid'];
	$u=$_POST['email'];
	$p=$_POST['pass'];
	$c=$_POST['repass'];{
          $insert = mysqli_query($mysqli, "INSERT INTO `reg`(uname,email,pass,repass)VALUES('$t','$u','$p','$c')") or die('query failed');
            if($insert){
             echo '<script type="text/JavaScript"> 
             alert("your register success!");
             </script>';
             header('location:home.html');
          }else{
            echo '<script type="text/JavaScript"> 
        alert("your register failed!");
        </script>';
          }
       }
    }
?>