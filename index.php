<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "students";

$conexionBD = new mysqli($servername, $username, $password, $dbname);
//check connection 
if($conexionBD->connect_error){
    die("connection failed:".$conexionBD->connect_error);
}
echo "connected successufully";


?>