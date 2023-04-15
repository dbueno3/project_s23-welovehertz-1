<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        // Retrieve the id and name values from the users table
        $sql = "SELECT id, residence FROM Residences";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        // Get the number of rows in the result set
        $num_rows = $stmt->rowCount();

        // Convert the result to an array of associative arrays
        $rows = array();
        if ($num_rows > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $rows[] = $row;
            }
        }

        // Output the rows as JSON
        header('Content-Type: application/json');
        echo json_encode($rows);
}
?>
