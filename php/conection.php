<?php 
$usernma = "";
$pass = "";
$localhost ="";
$database ="";

$con = mysqli_connect($localhost,$usernma,$pass,$database);

if (!$con){
    die("Connection Failed : ". mysqli_connect_error());
}
echo("Connection Succes full");
mysqli_close($con);
