<?php

session_start();
if (!isset($_SESSION["user"]))
{
  header("location:index.php");
}

require_once("conexion.inc.php");
$conexion = new mysqli($servidor, $usuario, $passwd, $basedatos);
if (mysqli_connect_errno())
{
  echo "Error al establecer la conexión con la base de datos: " . mysqli_connect_error();
  exit();
}

$conexion->query("set names utf8");

?>
<html>
  <head>
  <title>Students List</title>
  
  
<?php require_once("header.php"); ?>



 <br></br>
  <br></br>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="form-group">
          <h2> Seleccione Alumno </h2>
      <?php
      $id = $_GET['id'];
      $students = $conexion->query("select t.student, p.name, p.surname FROM teach t INNER JOIN person p ON t.student = p.id WHERE t.teacher = " . $_SESSION["user"]["id"]);
      if ($students->num_rows == 0)
      {
        echo "<p><b>No hay alumnos asociados</b></p>";
      }
      else
      {
        ?>
          <select class="form-control" size="10" id="chooser">
           <?php
        while ($student = $students->fetch_array())
        {
          echo "<option value='" . $student[0] . "'>$student[1] $student[2]</option>";
        }
        echo "</select>";
      }
        ?>
        </div>
        <br>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-4">
        <br>
        <div class="wrapper">
          <div class="text-center">
            <span class="group-btn btn-group-justified ">
              <a href="#" id="associate_activity" class="btn btn-light btn-block" onClick="guardar();"> Asociar</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <br></br>
  <script>
  function guardar() {  
  var url = "associate_activity.save.php";  
  var id = <?php echo $id; ?>;
  var val = $("#chooser").val();
  var datos = {student: val, activity: id};

  $.post(url, datos, function(resultado) {
    
    if (resultado != 0)
    {
      window.location.replace("execution.php?activity=" + resultado);
    }
    else
    {
      alert("ERROR");
    }
  });
}


</script>

  
  <?php require_once("footer.php"); ?>