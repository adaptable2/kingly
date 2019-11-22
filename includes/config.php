<?php
$mysqli=new mysqli('localhost','root','root','acreativa_kingly');
 
if($mysqli->connect_error){
  echo $mysqli->connect_error;
}
 
?>