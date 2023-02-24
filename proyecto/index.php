<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../includes/css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>Formulario:Desis</title>
</head>
<body>

    <div class="contenedor">
        <form id="formInsert" action="POST">
            <h1>Formulario de Votacíon Regional</h1>
            <div class="contenedor-input">
                <label class="marca" for="nombreApellido">Nombre y Apellido:</label>
                <input class="input-campo" type="text" id="nombreApellido" name="nombreApellido" placeholder="Ingrese Nombre y Apellido">
            </div>
            <div class="contenedor-input">
                <label class="marca" for="alias">Alias: </label>
                <input class="input-campo" type="text" id="alias" name="alias" placeholder="Ingrese un Alias, minimo 5 caracteres, incluye numeros">
            </div>
            <div class="contenedor-input">
                <label class="marca" for="RUT">RUT: </label>
                <input class="input-campo" type="text" id="RUT" name="RUT"
                placeholder="Ingrese Rut con gion (ej: 12345678-9)">
            </div>
            <div class="contenedor-input">
                <label class="marca" for="email">Email: </label>
                <input class="input-campo" type="email" id="email" name="email" email placeholder="Ingrese Email Valido">
            </div>
            <div class="contenedor-input">
                <label class="marca" for="region">Region: </label>
                <select name="region" id="regiones"></select>
            </div>
            <div class="contenedor-input">
                <label class="marca" for="comuna">Comuna: </label>
                <select name="comuna" id="comunas"></select>
            </div>
            <div class="contenedor-input">
                <label class="marca" for="candidato">Candidato: </label>
                <select name="candidato" id="candidatos">
                    
                </select>
            </div>
            <div class="contenedor-input">
                <label class="marca" for="">¿Comó se entero de nosotros?</label>
                <input class="input-campo" type="checkbox" id="web" name="web">
                <label class="marca-check" for="web">Web</label>
                <input class="input-campo" type="checkbox" id="tv" name="tv">
                <label class="marca-check" for="tv">Tv</label>
                <input class="input-campo" type="checkbox" id="redsocial" name="redsocial">
                <label class="marca-check" for="redsocial">Red Social</label>
                <input class="input-campo" type="checkbox" id="amigo" name="amigo">
                <label class="marca-check" for="amigo">Amigo</label>
            </div>
            <button type="submit" class="btn" id ="submiButton">Ingresar Voto</button>

        </form>
    </div>
    <script type="text/javascript" src="../includes/js/index.js"></script>

</body>
</html>