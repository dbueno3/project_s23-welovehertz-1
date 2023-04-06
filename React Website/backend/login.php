<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start();

function getUser($con, $email, $password) {
    $sql = "SELECT * FROM users WHERE email='$email'";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $r = json_encode($result);
    // echo $r . "\n";

    if ($result) {
        $hashedPW = $result[0]['password'];
        // echo $hashedPW . "\n";
        if (password_verify($password, $hashedPW)) {
	    echo "Account Verified" . "\n";
            return 1;
        } else {
	    echo "Wrong Password" . "\n";
            return 0;
        }
    } else {
	echo "No Account With That Email" . "\n";
        return 0;
    }
}
// echo 'It Got to here' . "\n";
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        // echo 'It got inside the case Post' . "\n";
        $user = json_decode(file_get_contents('php://input'));
        $email = $user->email;
        $password = $user->password;
        $user = getUser($conn, $email, $password);
        // $v = true;
        // echo $v;
        // echo $user . "\n";
        // echo $email . "\n";
        // echo $password . "\n";
        if ($user == 0) {
            //echo 'It got inside thee user if statement';
            $_SESSION['error'] = "Username and password did not match";
            echo '<script>alert("', $_SESSION['error'], '"); window.location.href ="reg.php"; </script>';
            exit();
        }
        $_SESSION['email'] = $email;
        exit();
}

?>;