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
        $user_id = $user->id;
        $sql = "SELECT * FROM users WHERE id=$user_id";
        $param = $conn->prepare($sql);
        $param->execute();
        $data = $param->fetch(PDO::FETCH_ASSOC);
        $favListStr = $data['favorite_list'];
        $favListArr = explode(',', $favListStr);
        $result_array = array();
        for ($i = 0; $i < count($favListArr); $i++) {
            $curr_id = intval($favListArr[$i]);
            $sql3 = "SELECT residence FROM Residences WHERE ID=" . $curr_id;
            $param3 = $conn->prepare($sql3);
            $param3->execute();
            $data3 = $param3->fetch(PDO::FETCH_ASSOC);
            array_push($result_array, $data3['residence']);
        }
        $data['favorite_list'] = explode(',', $data['favorite_list']);
        $data['favorite_name_list'] = $result_array;
        echo json_encode($data);
        break;
}
?>;