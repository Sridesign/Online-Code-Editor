<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
<?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "regsiter";

   // create connection

   $conn = mysqli_connect($servername, $username, $password, $dbname);
   
   // if(!$conn){
   // 	die('not connected' . mysql_error());
   // }
   // echo('connected successfully');

   if(isset($_POST['submit']))
   {    
        $uname = $_POST['uname'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $repass = $_POST['repass'];
   
        $sql = "INSERT INTO reg (uname, email, pass, repass) VALUES ('$uname', '$email', '$pass', '$repass')";
        if (mysqli_query($conn, $sql)) {
   mysqli_close($conn);
   }
   }

 
?>
</body>
</html>