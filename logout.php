<?php
session_start();
if (!isset($_SESSION["user"]))
{
  header("location:index.php");
}

unset($_SESSION);
session_destroy();
header("location:index.php");
?>