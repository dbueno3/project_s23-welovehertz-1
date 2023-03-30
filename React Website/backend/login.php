<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start(); 

function getUser($conn, $username, $password){ 
    $sql = "SELECT * FROM users WHERE username=?";
    $prep = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($prep, $sql)){return false;}
    else{
        // execute statement 
        mysqli_stmt_bind_param($prep, "s", $username);
        mysqli_stmt_execute($prep);
        // Get result set from statement 
        $result = mysqli_stmt_get_result($prep);
        if ($row = mysqli_fetch_assoc($result)){
            if(password_verify($password, $row['password'])){
                return $row;
            } else{ 
                return false ; 
            }
        }else{
            return false; 
        }
    } 

}

if(isset($_POST["username"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $user = getUser($conn, $username, $password);
    if ($user){ 
        $_SESSION['error']= "Username and password did not match";
        echo '<script>alert("', $_SESSION['error'], '"); window.location.href ="reg.php"; </script>'; 
        exit();
    }
    $_SESSION['username'] = $username; 
    

    exit();
}
?>;