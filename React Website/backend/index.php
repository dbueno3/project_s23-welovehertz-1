<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("127.0.0.1","root@localhost","","users");

$first = $_POST['first_name'];
$last = $_POST['last_name'];
$email= $_POST['email_name'];
$password = $_POST['password_name'];


$query = "INSERT INTO users (first_name, last_name, email, password) VALUES ($first,$last,$email,$password)";


if($mysqli_query($conn,$query)){
    echo "Account has been created";
}else {
    echo "Account creation failed";
}


?>