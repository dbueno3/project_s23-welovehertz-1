<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM users WHERE id=1";
        $param = $conn->prepare($sql);
        $param->execute();
        $unparsedData = $param->fetch(PDO::FETCH_ASSOC);
        $data = $unparsedData['favorite_list'];
        echo json_encode($data);
        break;
}
?>;