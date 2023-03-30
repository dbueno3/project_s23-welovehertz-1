<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start(); // start session to store user information
// check if user submitted the form

// if ($_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'GET') {
//     // get username and password from the form
//     $username = $_REQUEST['username'];
//     $password = $_REQUEST['password'];
//     $hashed_pass = password_hash($username->password,PASSWORD_DEFAULT);
//     //password_verify($password, $hashed_pass); 

//     // validate username and password
//     if ( password_verify($password, $hashed_pass) == true ) {
//         // if username and password are correct, set session variables and redirect to 
//         $_SESSION['username'] = $username;
//         header('Location: config.php');
//         exit();
//     } else {
//         // if username or password is incorrect, show error message
//         echo 'Invalid username or password.';
        
//     }
// }


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
?>
