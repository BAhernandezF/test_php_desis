Muy buenas, Mi nombre es Bastian Hernandez y desarrolle lo mas completo posible en base a los requerimientos solicitados la solucion.

el sistema posee las siguientes caracteristicas tecnicas:
*VERISON PHP: 8.2.0.
*VERISON APACHE: Apache/2.4.54 (Win64) OpenSSL/1.1.1p PHP/8.2.0.
*VERSION XAMPP: Ultima Estable = PHP 8.2.0.
*VERSION MYSQL = Ultima estable instalada junto con WorkBench = MYSQL80.
*VERSION JQUERY: jQuery 3.6.3.

--PASOS DE INSTALACION--

1.- Instalar XAMPP en su ultima version estable, ya que trae todo lo adecuado para utilizar junto con PHP8 (hacerlo con todas las dependencias marcadas por defecto).

2.- Por mi parte instale aparte MYSQL80, asi que me dirigi a la web oficial para bajar la version Comunity, que es un ejecutable.msi el cual trae todos los paquetes instalables de MYSQL asi como los dbc y Workbench (asi se trabaja mas comodamente).

3.-una vez instaladas todas, se inicia el control panel de XAMPP para ejecutar el sistema APACHE, OJO!!, no iniciar MYSQL ya que lo hemos instalado de otra fuente(mucho mas bonito que trabajar directamente del phpmyadmin).

4.- inciar MYSQL WORKBENCH e inciar al localhost con las variables de adminstrador ingresadas en el momento de instalacion (en mi caso "username":"root", "password":"sasa").

5.- Ejecutar las querys para crear bases de datos y poblarlas que estan en la carpeta databases dentro del proyecto, en el siguiente orden:
    *Tablas_test_desis_php_mysql.sql.
    *Insert_Candidatos.sql.
    *Insert_regiones.sql.
    *insert_comunas.sql (en este, seguir la instruccion interna para aplicar un trim a todos los valores de tipo "nombre_comuna" y eliminar     espacios en blanco a los laterales y que se vea feito).

6.- Dirigirse a la ruta para revisar el proyecto, en mi caso "http://localhost:80/php_test/proyecto/index.php", localhost:80 pueder variar dependiendo si se esta revisando en un hosting o servidor interno de desarrollo.

--Estructura del proyecto--
El proyecto consta de 4 carpetas:

-conexion: donde se encuentra el archivo de conexion a la base de datos todo con variables para ser reemplazas sin afectar a la query de conexion final.

-databases: carpeta donde se encuentran los SQL del proyecto.

-includes: carpeta con 2 subcarpetas "css" y "js" que contienen los estilos y funcionalidad del sistema.
    *js: archivo interno llamado index.js, el cual contiene todas las funciones y funcionalidades que el sistema ejecuta para hacer peticiones ajax, procesos logicos y demases, de forma interna tiene una breve explicacion por cada funcion.

-proyecto: carpeta con 3 archivos, "index.php", "info.php", "procesosPHP.php":
    *index.php: es la vista html con toda la estructura visual y llamadas de script que el sistema contiene.
    *info.php: es un archivo opcional para revisar con mas detalles las versiones de instalacion.
    *procesosPHP.php: es el archivo el cual contiene TODOS los procesos funcionales hacia la bd, en base a funciones.
