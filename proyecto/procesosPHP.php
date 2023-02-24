<?php
include '../conexion/dbconn.php';
$proceso = $_POST['proceso'];
$idregion = '';
if ($proceso == 'procesoLlamarComuna') {
    # code...
    $idregion = $_POST['idregion'];
}

//variables del insert

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$alias = $_POST['alias'];
$rut = $_POST['rut'];
$email = $_POST['email'];
$region = $_POST['region'];
$comuna = $_POST['comuna'];
$candidato = $_POST['candidato'];
$web = $_POST['web'];
$tv = $_POST['tv'];
$redsocial = $_POST['redsocial'];
$amigo = $_POST['amigo'];

//procesoInsertEncuesta
if ($proceso == 'procesoLlamarRegion') {
    # code...
    obtieneRegiones();
}

if ($proceso == 'procesoLlamarComuna') {
    # code...
    obtieneComunas($idregion);
}

if ($proceso == 'procesoLlamarCandidato') {
    # code...
    obtieneCandidatos();
}

if ($proceso == 'procesoInsertEncuesta') {
    # code...

    insertaEncuesta($nombre,$apellido,$alias,$rut,$email,$region,$comuna,$candidato,$web,$tv,$redsocial,$amigo);
}





//funcion compuesta por un select y una construccion de string para devolver un pre-armado de los selectores de regiones
function obtieneRegiones(){
    include '../conexion/dbconn.php';
    $query="SELECT region_id, nombre_region FROM regiones ORDER BY region_id";
    $result = mysqli_query($conn, $query);
    
    
    while (($fila = mysqli_fetch_array($result)) != NULL) {
        echo '<option value="'.$fila["region_id"].'">'.$fila["nombre_region"].'</option>';
    }
    
    $return = mysqli_free_result($result);

    echo $return;
}

//funcion compuesta por un select y una construccion de string para devolver un pre-armado de los selectores de comunas en base al id de la region.
function obtieneComunas($id){
    include '../conexion/dbconn.php';
    $query="SELECT comuna_id, nombre_comuna FROM comunas where region_id = $id ORDER BY comuna_id";
    $result = mysqli_query($conn, $query);


    while (($fila = mysqli_fetch_array($result)) != NULL) {
        echo '<option value="'.$fila["comuna_id"].'">'.$fila["nombre_comuna"].'</option>';
    }


    $return = mysqli_free_result($result);

    echo $return;
}
//funcion compuesta por un select y una construccion de string para devolver un pre-armado de los selectores de candidatos
function obtieneCandidatos(){
    include '../conexion/dbconn.php';
    $query="SELECT candidato_id, nombre_candidato FROM candidato ORDER BY candidato_id";
    $result = mysqli_query($conn, $query);
    
    
    while (($fila = mysqli_fetch_array($result)) != NULL) {
        echo '<option value="'.$fila["candidato_id"].'">'.$fila["nombre_candidato"].'</option>';
    }
    
    $return = mysqli_free_result($result);

    echo $return;
}
//funcion compuesta por un select y un insert, El select principalmente nos indica si el RUt ingresado exista o no en la base de datos, asi no se repiten los datos en base al rut, una vez se valida esto, se genera el insert con todas las variables pasadas a la funcion, que devuelve un $message, haya sido exitosa o no.
function insertaEncuesta($val1, $val2, $val3, $val4, $val5, $val6, $val7, $val8, $val9, $val10, $val11, $val12,){
    include '../conexion/dbconn.php';
    $message = '';
    $querySelect = "SELECT rut FROM votante where rut = '$val4'";
    $tempResponse = mysqli_num_rows(mysqli_query($conn, $querySelect));

    if($tempResponse == 0){
        $queryInsert="INSERT INTO votante (nombre, apellido, alias, rut, email, region, comuna, candidato, por_web, por_tv, por_rs, por_amigo, fecha_insert) VALUES ('$val1','$val2','$val3','$val4','$val5','$val6','$val7','$val8',$val9,$val10,$val11,$val12, CURRENT_TIMESTAMP())";

        $return = mysqli_query($conn, $queryInsert);
        
        if(!$return){
            $message  = 'Error de insert: '.'el voto no se ha ingresado al sistema';
        }
        else{
            $message = '';
            $message = 'voto enviado correctamente!';
        }
    
        echo $message;
    }else{
        $message = 'Rut ya existente, no se puede repetir el voto';
        echo $message;
    }





}

?>