<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start(); // start session to store user information
// check if user submitted the form
if ($_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'GET') {
    // get username and password from the form
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    // validate username and password
    if ($username == 'your_username' && $password == 'your_password') {
        // if username and password are correct, set session variables and redirect to 
        $_SESSION['username'] = $username;
        header('Location: config.php');
        exit();
    } else {
        // if username or password is incorrect, show error message
        echo 'Invalid username or password.';
    }
}
?>
