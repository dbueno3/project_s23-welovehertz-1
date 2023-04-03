<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
  case "POST":
    $user = json_decode(file_get_contents('php://input'));
    echo $user->first_name; 
    // Validate input fields
    $errors = [];
    if (!preg_match('/^[a-zA-Z ]+$/', $user->first_name)) {
      $errors['first_name'] = 'First name should only contain letters and spaces';
    }
    if (!preg_match('/^[a-zA-Z ]+$/', $user->last_name)) {
      $errors['last_name'] = 'Last name should only contain letters and spaces';
    }
    if (!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
      $errors['email'] = 'Invalid email address';
    }
    if (strlen($user->password) < 8) {
      $errors['password'] = 'Password should be at least 8 characters long';
    }
    if ($user->password !== $user->confirmPassword) {
      $errors['confirm_password'] = 'Passwords do not match';
    }

    if (count($errors) > 0) {
      $response = ['status' => 0, 'message' => 'Input validation failed', 'errors' => $errors];
      echo json_encode($response);
      exit();
    } else {
      $hashed_pass = password_hash($user->password, PASSWORD_DEFAULT);
      $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (:first, :last, :email, :password)";
      $param = $conn->prepare($sql);
      $param->bindParam(':first', $user->first_name);
      $param->bindParam(':last', $user->last_name);
      $param->bindParam(':email', $user->email);
      $param->bindParam(':password', $hashed_pass);
      if (count($errors) == 0 && $param->execute()) {
        $response = ['status' => 1, 'message' => 'Record Created'];
      } else {
        $response = ['status' => 0, 'message' => 'Record Failed to Create'];
      }
      echo json_encode($response);
      break;
    }
} 
?>
