<?php
$usernma = "root";
$pass = "";
$localhost = "127.0.0.1/localhost";
$database = "admin";

$con = mysqli_connect($localhost, $usernma, $pass, $database);

if (!$con) {
    die("Connection Failed : " . mysqli_connect_error());
}
echo ("Connection Succes full");
mysqli_close($con);
