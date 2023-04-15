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
        $resi_id = $user->id;
        $user_id = $user->pid;
        echo $user_id;
        $sql = "SELECT favorite_list FROM users WHERE id=$user_id";
        $param = $conn->prepare($sql);
        $param->execute();
        $data = substr(json_encode($param->fetchAll(PDO::FETCH_ASSOC)), 19, -3);
        if (strlen($data) == 0) {
            echo "First in array";
            $sql2 = "UPDATE users SET favorite_list='$resi_id' WHERE id=$user_id";
            $param2 = $conn->prepare($sql2);
            $param2->execute();
        } else {
            $data_array = explode(",", $data);
            echo "\r\n-first-line-\r\n";
            if (in_array(strval($resi_id), $data_array)) {
                echo "its in the array";
                $data_remove = array(strval($resi_id));
                $result = implode(',', array_diff($data_array, $data_remove));
                echo $result;
            } else {
                echo "Its not in the array";
                array_push($data_array, strval($resi_id));
                $result = implode(',', $data_array);
                echo $result;
            }
            $sql3 = "UPDATE users SET favorite_list='$result' WHERE id=$user_id";
            $param3 = $conn->prepare($sql3);
            $param3->execute();
        }


        break;
}
?>;